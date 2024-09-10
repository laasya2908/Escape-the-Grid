from flask import Flask
from flask import redirect, url_for, render_template, request, session, flash
from flask_sqlalchemy import SQLAlchemy

from os import path

from flask_login import LoginManager

db = SQLAlchemy()
DB_NAME = "maze_game.db"


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'

    db.init_app(app)

    from .auth import auth

    app.register_blueprint(auth, url_prefix='/')

    from .models import usersplayed, leaderboard

    with app.app_context():
        db.create_all()

    login_manager = LoginManager()
    login_manager.login_view = 'auth.home'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):

        return usersplayed.query.get(int(id))

    return app


def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all()
        print('Created Database!')
