#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Created on Mon Sep 26 16:41:03 2022

@author: avinash
"""

from .__init__ import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class usersplayed(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True)


class leaderboard(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    level = db.Column(db.Integer)
    timeused = db.Column(db.Integer)
