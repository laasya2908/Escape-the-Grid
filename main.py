from website import create_app

from flask import Flask, redirect, url_for, render_template, request, session, flash

app = create_app()


if __name__ == '__main__':
    app.run(debug=True)
