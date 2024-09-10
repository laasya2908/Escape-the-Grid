from flask import Blueprint, render_template
from flask import redirect, url_for, request, session, flash
from .models import leaderboard, usersplayed

from .__init__ import db
from flask import *
#from random import *
#import json
#from flask_login import login_user,login_required,logout_user,current_user

import random
from colorama import init

auth = Blueprint('auth', __name__)
lvllist = [0]


@auth.route('/home', methods=['GET', 'POST'])
def home():
    db.create_all()
    if request.method == 'POST':
        username = request.form.get('uname')
        user = usersplayed.query.filter_by(name=username).first()

        if user:
            flash('Username already used, Try a different one', category='error')
            return redirect(url_for('auth.home'))
        else:
            lvllist.clear()
            new_user = usersplayed(name=username)
            db.session.add(new_user)
            db.session.commit()
            session['username'] = username
            return redirect(url_for('auth.maps'))
    # data=LeaderBoard.query.filter_by(level=find).order_by("timeused").limit(5).all()
    return render_template("intro.html")


@auth.route('/level1', methods=['GET', 'POST'])
def level1():
    uname = session['username']
    maze = [[]]

    return render_template("index.html", username=uname, poi="Map A", mazedata=maze, time=40)


@auth.route('/level2', methods=['GET', 'POST'])
def level2():
    uname = session['username']
    maze = [[]]
    return render_template("index.html", username=uname, poi="Map B", mazedata=maze, time=30)


@auth.route('/level3', methods=['GET', 'POST'])
def level3():
    uname = session['username']
    maze = [[]]
    return render_template("index.html", username=uname, poi="Map C", mazedata=maze, time=30)


@auth.route('/level4', methods=['GET', 'POST'])
def level4():
    uname = session['username']
    maze = [[]]
    return render_template("index.html", username=uname, poi="Map D", mazedata=maze, time=40)


@auth.route('/random1', methods=['GET', 'POST'])
def random1():
    uname = session['username']
    # Find number of surrounding cells

    def surroundingCells(rand_wall):
        s_cells = 0
        if (maze[rand_wall[0]-1][rand_wall[1]] == 'c'):
            s_cells += 1
        if (maze[rand_wall[0]+1][rand_wall[1]] == 'c'):
            s_cells += 1
        if (maze[rand_wall[0]][rand_wall[1]-1] == 'c'):
            s_cells += 1
        if (maze[rand_wall[0]][rand_wall[1]+1] == 'c'):
            s_cells += 1
        return s_cells
    # Main code
    # Init variables
    wall = 'w'
    cell = 'c'
    unvisited = 'u'
    height = 14
    width = 25
    maze = []
    # Initialize colorama
    init()
    # Denote all cells as unvisited
    for i in range(0, height):
        line = []
        for j in range(0, width):
            line.append(unvisited)
        maze.append(line)
    # Randomize starting point and set it a cell
    starting_height = int(random.random()*height)
    starting_width = int(random.random()*width)
    if (starting_height == 0):
        starting_height += 1
    if (starting_height == height-1):
        starting_height -= 1
    if (starting_width == 0):
        starting_width += 1
    if (starting_width == width-1):
        starting_width -= 1
    # Mark it as cell and add surrounding walls to the list
    maze[starting_height][starting_width] = cell
    walls = []
    walls.append([starting_height - 1, starting_width])
    walls.append([starting_height, starting_width - 1])
    walls.append([starting_height, starting_width + 1])
    walls.append([starting_height + 1, starting_width])
    # Denote walls in maze
    maze[starting_height-1][starting_width] = 'w'
    maze[starting_height][starting_width - 1] = 'w'
    maze[starting_height][starting_width + 1] = 'w'
    maze[starting_height + 1][starting_width] = 'w'
    while (walls):
        # Pick a random wall
        rand_wall = walls[int(random.random()*len(walls))-1]
        # Check if it is a left wall
        if (rand_wall[1] != 0):
            if (maze[rand_wall[0]][rand_wall[1]-1] == 'u' and maze[rand_wall[0]][rand_wall[1]+1] == 'c'):
                # Find the number of surrounding cells
                s_cells = surroundingCells(rand_wall)
                if (s_cells < 2):
                    # Denote the new path
                    maze[rand_wall[0]][rand_wall[1]] = 'c'
                    # Mark the new walls
                    # Upper cell
                    if (rand_wall[0] != 0):
                        if (maze[rand_wall[0]-1][rand_wall[1]] != 'c'):
                            maze[rand_wall[0]-1][rand_wall[1]] = 'w'
                        if ([rand_wall[0]-1, rand_wall[1]] not in walls):
                            walls.append([rand_wall[0]-1, rand_wall[1]])
                    # Bottom cell
                    if (rand_wall[0] != height-1):
                        if (maze[rand_wall[0]+1][rand_wall[1]] != 'c'):
                            maze[rand_wall[0]+1][rand_wall[1]] = 'w'
                        if ([rand_wall[0]+1, rand_wall[1]] not in walls):
                            walls.append([rand_wall[0]+1, rand_wall[1]])
                    # Leftmost cell
                    if (rand_wall[1] != 0):
                        if (maze[rand_wall[0]][rand_wall[1]-1] != 'c'):
                            maze[rand_wall[0]][rand_wall[1]-1] = 'w'
                        if ([rand_wall[0], rand_wall[1]-1] not in walls):
                            walls.append([rand_wall[0], rand_wall[1]-1])
                # Delete wall
                for wall in walls:
                    if (wall[0] == rand_wall[0] and wall[1] == rand_wall[1]):
                        walls.remove(wall)
                continue
        # Check if it is an upper wall
        if (rand_wall[0] != 0):
            if (maze[rand_wall[0]-1][rand_wall[1]] == 'u' and maze[rand_wall[0]+1][rand_wall[1]] == 'c'):
                s_cells = surroundingCells(rand_wall)
                if (s_cells < 2):
                    # Denote the new path
                    maze[rand_wall[0]][rand_wall[1]] = 'c'
                    # Mark the new walls
                    # Upper cell
                    if (rand_wall[0] != 0):
                        if (maze[rand_wall[0]-1][rand_wall[1]] != 'c'):
                            maze[rand_wall[0]-1][rand_wall[1]] = 'w'
                        if ([rand_wall[0]-1, rand_wall[1]] not in walls):
                            walls.append([rand_wall[0]-1, rand_wall[1]])
                    # Leftmost cell
                    if (rand_wall[1] != 0):
                        if (maze[rand_wall[0]][rand_wall[1]-1] != 'c'):
                            maze[rand_wall[0]][rand_wall[1]-1] = 'w'
                        if ([rand_wall[0], rand_wall[1]-1] not in walls):
                            walls.append([rand_wall[0], rand_wall[1]-1])
                    # Rightmost cell
                    if (rand_wall[1] != width-1):
                        if (maze[rand_wall[0]][rand_wall[1]+1] != 'c'):
                            maze[rand_wall[0]][rand_wall[1]+1] = 'w'
                        if ([rand_wall[0], rand_wall[1]+1] not in walls):
                            walls.append([rand_wall[0], rand_wall[1]+1])
                # Delete wall
                for wall in walls:
                    if (wall[0] == rand_wall[0] and wall[1] == rand_wall[1]):
                        walls.remove(wall)
                continue
        # Check the bottom wall
        if (rand_wall[0] != height-1):
            if (maze[rand_wall[0]+1][rand_wall[1]] == 'u' and maze[rand_wall[0]-1][rand_wall[1]] == 'c'):
                s_cells = surroundingCells(rand_wall)
                if (s_cells < 2):
                    # Denote the new path
                    maze[rand_wall[0]][rand_wall[1]] = 'c'
                    # Mark the new walls
                    if (rand_wall[0] != height-1):
                        if (maze[rand_wall[0]+1][rand_wall[1]] != 'c'):
                            maze[rand_wall[0]+1][rand_wall[1]] = 'w'
                        if ([rand_wall[0]+1, rand_wall[1]] not in walls):
                            walls.append([rand_wall[0]+1, rand_wall[1]])
                    if (rand_wall[1] != 0):
                        if (maze[rand_wall[0]][rand_wall[1]-1] != 'c'):
                            maze[rand_wall[0]][rand_wall[1]-1] = 'w'
                        if ([rand_wall[0], rand_wall[1]-1] not in walls):
                            walls.append([rand_wall[0], rand_wall[1]-1])
                    if (rand_wall[1] != width-1):
                        if (maze[rand_wall[0]][rand_wall[1]+1] != 'c'):
                            maze[rand_wall[0]][rand_wall[1]+1] = 'w'
                        if ([rand_wall[0], rand_wall[1]+1] not in walls):
                            walls.append([rand_wall[0], rand_wall[1]+1])
                # Delete wall
                for wall in walls:
                    if (wall[0] == rand_wall[0] and wall[1] == rand_wall[1]):
                        walls.remove(wall)
                continue
        # Check the right wall
        if (rand_wall[1] != width-1):
            if (maze[rand_wall[0]][rand_wall[1]+1] == 'u' and maze[rand_wall[0]][rand_wall[1]-1] == 'c'):
                s_cells = surroundingCells(rand_wall)
                if (s_cells < 2):
                    # Denote the new path
                    maze[rand_wall[0]][rand_wall[1]] = 'c'
                    # Mark the new walls
                    if (rand_wall[1] != width-1):
                        if (maze[rand_wall[0]][rand_wall[1]+1] != 'c'):
                            maze[rand_wall[0]][rand_wall[1]+1] = 'w'
                        if ([rand_wall[0], rand_wall[1]+1] not in walls):
                            walls.append([rand_wall[0], rand_wall[1]+1])
                    if (rand_wall[0] != height-1):
                        if (maze[rand_wall[0]+1][rand_wall[1]] != 'c'):
                            maze[rand_wall[0]+1][rand_wall[1]] = 'w'
                        if ([rand_wall[0]+1, rand_wall[1]] not in walls):
                            walls.append([rand_wall[0]+1, rand_wall[1]])
                    if (rand_wall[0] != 0):
                        if (maze[rand_wall[0]-1][rand_wall[1]] != 'c'):
                            maze[rand_wall[0]-1][rand_wall[1]] = 'w'
                        if ([rand_wall[0]-1, rand_wall[1]] not in walls):
                            walls.append([rand_wall[0]-1, rand_wall[1]])
                # Delete wall
                for wall in walls:
                    if (wall[0] == rand_wall[0] and wall[1] == rand_wall[1]):
                        walls.remove(wall)
                continue
        # Delete the wall from the list anyway
        for wall in walls:
            if (wall[0] == rand_wall[0] and wall[1] == rand_wall[1]):
                walls.remove(wall)
    # Mark the remaining unvisited cells as walls
    for i in range(0, height):
        for j in range(0, width):
            if (maze[i][j] == 'u'):
                maze[i][j] = 'w'
    # Set entrance and exit
    for i in range(0, width):
        if (maze[1][i] == 'c'):
            maze[0][i] = 'c'
            break
    for i in range(width-1, 0, -1):
        if (maze[height-2][i] == 'c'):
            maze[height-1][i] = 'c'
            break
    for i in range(14):
        for j in range(25):
            if (maze[i][j] == 'w'):
                maze[i][j] = 1
            else:
                maze[i][j] = 0
    return render_template("index.html", username=uname, poi="Random", mazedata=maze, time="60")


@auth.route('/logout')
def logout():
    return redirect(url_for('auth.home'))


@auth.route('/maps')
def maps():
    user1 = leaderboard.query.filter_by(
        level=1).order_by("timeused").limit(3).all()
    user2 = leaderboard.query.filter_by(
        level=2).order_by("timeused").limit(3).all()
    user3 = leaderboard.query.filter_by(
        level=3).order_by("timeused").limit(3).all()
    user4 = leaderboard.query.filter_by(
        level=4).order_by("timeused").limit(3).all()
    return render_template("maps.html", lvls=lvllist, user1=user1, user2=user2, user3=user3, user4=user4)


@auth.route('/data', methods=['POST'])
def data():
    jsdata = request.form['javascript_data']
    level = request.form['lvl']
    uname = session['username']
    new_user = leaderboard(name=uname, level=level, timeused=jsdata)
    db.session.add(new_user)
    db.session.commit()
    return redirect(url_for('auth./maps'))


@auth.route('/usedpages', methods=['GET', 'POST'])
def usedpages():
    level = request.form['lvl']
    lvllist.append(level)
    return redirect(url_for('auth./maps'))
