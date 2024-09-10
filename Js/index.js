let l1 = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
let l2 = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
let l3 = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
let l4 = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
let sun = 0;
let g_time = 0;
let s_x = 0;
let s_y = 1;
let e_x = 13;
let e_y = 23;
let starting = [],
  ending = [];
let level = 0;
let map_n = document.querySelector(".map_name h1").innerHTML;
let l5 = document.getElementById("1000").innerHTML;
console.log(typeof l1);
switch (map_n[4]) {
  case "A":
    l = l1;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 40;
    level = 1;
    break;
  case "B":
    l = l2;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 30;
    level = 2;
    break;
  case "C":
    l = l3;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 30;
    level = 3;
    break;
  case "D":
    l = l4;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 40;
    level = 4;
    break;
  case "o":

    console.log(l5);
    l5 = JSON.parse(l5);
    console.log(typeof l5);
    l = l5;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 60;
    level = 0;
    break;
}
function find_start() {
  for (i = 0; i < l.length; i++) {
    for (j = 0; j < l[i].length; j++) {
      if (l[i][j] == 0) {
        starting = [i, j];
        return starting;
      }
    }
  }
}
function find_end() {
  for (i = l.length - 1; i >= 0; i--) {
    for (j = l[i].length - 1; j >= 0; j--) {
      if (l[i][j] == 0) {
        return [i, j];
      }
    }
  }
}
let order = new Array([0, 0]);
order.pop(0);
let end = [e_x, e_y];
let flag = 0;
let rpos = s_x;
let cpos = s_y;
let visit = [[rpos, cpos]];
let mv = 0;
let btn = document.querySelector(".btn");
btn.addEventListener("click", gamepage);
function gamepage() {
  $.post("/usedpages", { lvl: level });
  document.querySelector(".tohide").classList.add("hide");
  document.querySelector(".tounhide").classList.remove("tounhide");
  $(".hide_nav").addClass("maze_nav");
  $(".hidden_in_nav").removeClass("hidden_in_nav");
  progress(g_time, g_time, $("#progressBar"));
  walling();
  po();
}
let timeused = 0;
function progress(timeleft, timetotal, $element) {
  let progressBarWidth = ($element.width() * timeleft) / timetotal;
  timeused = timetotal - timeleft;
  if (timeleft <= g_time / 10 && timeleft >= 0) {
    $element
      .find("div")
      .animate({ width: progressBarWidth }, 500)
      .html(timeleft);
    setTimeout(function () {
      progress(timeleft - 1, timetotal, $element);
    }, 1000);
  } else if (timeleft > 0) {
    $element
      .find("div")
      .animate({ width: progressBarWidth }, 500)
      .html(timeleft + " seconds to go");
    setTimeout(function () {
      progress(timeleft - 1, timetotal, $element);
    }, 1000);
  }
  if (timeleft === 0) {
    document.querySelector("#progressBar").classList.add("hide");
    document.querySelector(".sol_h1").classList.remove("hidden_h1");
    rpos = s_x;
    cpos = s_y;
    l[rpos][cpos] = 0;
    l[end[0]][end[1]] = 0;
    while (visit.length > 0) { visit.pop(); }

    walling();

    document
      .getElementById(e_x + "-" + e_y)
      .setAttribute("class", "ghost_coloured_end");
    document
      .getElementById(s_x + "-" + s_y)
      .setAttribute("class", "ghost_coloured_start");
    pathfind(rpos, cpos, "down");
    let d = 1;
    setInterval(function () {
      if (d != order.length - 1) {
        let x = Number(order[d][0]),
          y = Number(order[d][1]);
        d++;
        const content = document.getElementById(x + "-" + y);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-fade fa-lg"></i>';
        content.setAttribute("class", "visited");
      }
    }, 250);


  }
}
function walling() {
  for (i = 0; i < l.length; i++) {
    for (j = 0; j < l[i].length; j++) {
      if (l[i][j] == 0) {
        const content = document.getElementById(i + "-" + j);
        let attr = content.getAttributeNode("class");
        if (attr == null) {
          continue;
        }
        content.innerHTML = " ";
        content.removeAttributeNode(attr);
        content.setAttribute("class", "ghost");
      }
      if (l[i][j] == 1) {
        const content = document.getElementById(i + "-" + j);
        content.innerHTML = '<img src="../static/fire_gif_black.gif"></img>';
        content.setAttribute("class", "wall");
      }
      if (i == e_x && j == e_y) {
        const content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-house fa-lg"></i>';
        content.setAttribute("class", "house");
      }
      if (i == s_x && j == s_y) {
        const content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-beat fa-xl"></i>';
        content.setAttribute("class", "ghost");
      }
    }
  }
}
function po() {
  window.onkeyup = function (e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      mv = move(e.keyCode);
      // no=0, yes=1, del=2
      if (mv === 1 && sun == 0) {
        i = rpos;
        j = cpos;
        let content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-beat fa-xl"></i>';
        content.setAttribute("class", "ghost");

        let k = visit[visit.length - 2];
        i = k[0];
        j = k[1];
        content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-fade fa-lg"></i>';
        content.setAttribute("class", "visited");
      }
      if (mv === 2 && sun == 0) {
        i = rpos;
        j = cpos;
        content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-beat fa-xl"></i>';
        content.setAttribute("class", "ghost");

        let k = visit.pop();
        i = k[0];
        j = k[1];
        content = document.getElementById(i + "-" + j);
        content.innerHTML = " ";
        content.setAttribute("class", "unvisited");
      }
      if (mv === 0 && sun == 0) {
        var kick = new Audio("../static/kick-bass.mp3");
        kick.play();
      }
      if (JSON.stringify([e_x, e_y]) === JSON.stringify([rpos, cpos])) {

        console.log(timeused);
        $.post("/data", { javascript_data: timeused, lvl: level });
        content = document.getElementById('progressBar').setAttribute("class", "invisible");
        content = document.getElementById('ending').setAttribute("class", "sol_h1");
        if (sun == 0) {
          content = document.getElementById('ending').innerHTML = "<h1>You have finished the game in " + timeused + " seconds</h1>";
          sun = 1;
        }
        content = document.getElementById('mygod').setAttribute("class", "hidden_h1");
      }
    }
  };
}

// no=0, yes=1, del=2
function move(dir) {
  //left
  if (dir == 37) {
    if (l[rpos][cpos - 1] == 1) {
      return 0;
    } else {
      cpos -= 1;
      return check(rpos, cpos);
    }
  }
  //up
  else if (dir == 38) {
    if (l[rpos - 1][cpos] == 1) {
      return 0;
    } else {
      rpos -= 1;
      return check(rpos, cpos);
    }
  }
  //right
  else if (dir == 39) {
    if (l[rpos][cpos + 1] == 1) {
      return 0;
    } else {
      cpos += 1;
      return check(rpos, cpos);
    }
  }
  //down
  else if (dir == 40) {
    if (l[rpos + 1][cpos] == 1) {
      return 0;
    } else {
      rpos += 1;
      return check(rpos, cpos);
    }
  }
}

function check(rpos, cpos) {
  if (visit.length >= 2) {
    let g = visit[visit.length - 2];
    if (g[0] == rpos && g[1] == cpos) {
      return 2;
    } else {
      visit.push([rpos, cpos]);
      return 1;
    }
  } else {
    visit.push([rpos, cpos]);
    return 1;
  }
}

function pathfind(r, c, dir) {
  order.push([r, c]);
  if (end[0] == r && end[1] == c) {
    flag = 1;
  } else {
    if (dir != "up" && l[r + 1][c] == 0 && flag != 1) {
      pathfind(r + 1, c, "down");
    }
    if (dir != "right" && l[r][c - 1] == 0 && flag != 1) {
      pathfind(r, c - 1, "left");
    }
    if (dir != "down" && l[r - 1][c] == 0 && flag != 1) {
      pathfind(r - 1, c, "up");
    }
    if (dir != "left" && l[r][c + 1] == 0 && flag != 1) {
      pathfind(r, c + 1, "right");
    }
    if (flag != 1) {
      order.pop();
      return;
    }
  }
  return;
}

