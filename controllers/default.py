# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

# -------------------------------------------------------------------------
# This is a sample controller
# - index is the default action of any application
# - user is required for authentication and authorization
# - download is for downloading files uploaded in the db (does streaming)
# -------------------------------------------------------------------------


def index():
    """
    example action using the internationalization operator T and flash
    rendered by views/default/index.html or views/generic.html

    if you need a simple wiki simply replace the two lines below with:
    return auth.wiki()
    """
    response.flash = T("Hello World")
    return dict(message=T('Welcome to web2py!'))

def lesson1():
    response.flash = T("Lesson: One")
    return dict(message=T('One'))
def quizNotes():
    response.flash = T("Quiz: Notes")
    return dict(message=T('WHAT!'))
def quizSteps():
    response.flash = T("Quiz: Steps")
    return dict(message=T('WHAT!'))
def lessonScales():
    response.flash = T("Lesson: Scales")
    return dict(message=T('Scales'))
def quizMajorScales():
    response.flash = T("Quiz: Major Scales")
    return dict(message=T('Somthing'))
def quizMinorScales():
    response.flash = T("Quiz: Minor Scales")
    return dict(message=T('Somthing'))
def quizInterval():
    response.flash = T("Quiz: Interval")
    return dict(message=T('Something else'))
def lessonStaff():
    response.flash = T("Lesson: Staff")
    return dict(message=T('Something something'))
def reference():
    response.flash = T("Reference Guid")
    return dict(message=T('Here you go'))


def user():
    """
    exposes:
    http://..../[app]/default/user/login
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    http://..../[app]/default/user/bulk_register
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    also notice there is http://..../[app]/appadmin/manage/auth to allow administrator to manage users
    """
    return dict(form=auth())


@cache.action()
def download():
    """
    allows downloading of uploaded files
    http://..../[app]/default/download/[filename]
    """
    return response.download(request, db)


def call():
    """
    exposes services. for example:
    http://..../[app]/default/call/jsonrpc
    decorate with @services.jsonrpc the functions to expose
    supports xml, json, xmlrpc, jsonrpc, amfrpc, rss, csv
    """
    return service()


