from app import app, db
from models.haiku import Haiku, Comment
from models.user import UserSchema

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    user, errors = user_schema.load({
        'username': 'lily',
        'email': 'lily@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    if errors:
        raise Exception(errors)

    kasia = Haiku(name='Kasia', text='A start-up starter, \n Plant based and is flourishing, \n Always smiling too',
    portrait=True)
    cliff = Haiku(name='Cliff', text='From a tiny land,\n He can watch sport all day long,\n The next crypto king?', portrait=True)
    daniela = Haiku(name='Daniela', text='Always lovely and warm,\n She asks all the best questions,\n And with that commute!', portrait=True)
    dave = Haiku(name='Dave', text='Blimey! hold my beer,\n It is not yet Christmas but,\n He is chuffed to bits', portrait=True)
    gae = Haiku(name='Gae', text='AirBnB boss,\n Novelist extraordinaire,\n LinkedIn King no more', portrait=True)
    sheema = Haiku(name='Sheema', text='She is a style queen,\n style as in Sass- but clothes too!\n Contest? She will win!', portrait=True)
    ola = Haiku(name='Ola', text='She\'s beautifully dressed,\n Finally has her own flat, \n She\'s earned it and more', portrait=True)
    amy = Haiku(name='Amy', text='From Bundy with love,\n When she goes out she goes out,\n Drink margaritas', portrait=True)
    tom = Haiku(name='Tom', text='Master of Pacman,\n Not a lover of pickle,\n A twirl though, yas queen', portrait=True)
    talha = Haiku(name='Talha', text='A man of few words,\n But those he chooses amuse,\n Nutella with what?!', portrait=True)
    mia = Haiku(name='Mia', text='Knows everyone,\n And what she wants too,\n Our linkedIn Queen', portrait=True)
    charlie = Haiku(name='Charlie', text='Is there a reason,\n That he eats so many nuts?\n Maybe for the "jokes"', portrait=True)
    sim = Haiku(name='Sim', text='Arms up in the air,\n Easy to tease but loved lots,\n Japanese Canteen?', portrait=True)
    shane = Haiku(name='Shane', text='Doesn\'t need google,\n Makes tetris look straightforward,\n Knows how to relax', portrait=True)
    jack = Haiku(name='Jack', text='He haz Cheeseburger,\n Dreams of leaving for MindGeek,\n Please wait \'til we\'re gone!', portrait=True)
    wes = Haiku(name='Wes', text='When it is deserved-\n Sassy as Sass! but really,\n So kind with his gifs', portrait=True)

    db.session.add(user)

    db.session.add(amy)
    db.session.add(tom)
    db.session.add(talha)
    db.session.add(shane)
    db.session.add(amy)
    db.session.add(charlie)
    db.session.add(wes)
    db.session.add(jack)
    db.session.add(ola)
    db.session.add(kasia)
    db.session.add(sim)
    db.session.add(sheema)
    db.session.add(gae)
    db.session.add(dave)
    db.session.add(daniela)
    db.session.add(cliff)
    db.session.add(mia)

    db.session.commit()
