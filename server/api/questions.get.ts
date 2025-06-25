import { defineEventHandler, createError } from "h3"

export default defineEventHandler(async (event) => {
	// Embed questions directly in the API route for reliability
	const questionsData = `I… 16 years old. My brother … 13.
====
# am/is
====
am/are
====
are/are
====
is/am
++++
Your books … on the table. They … in your bag.
====
# are/aren't
====
are/are
====
is/aren't
====
aren't/is
++++
There … 5 students in the room.
====
# are
====
Is
====
Was
====
Were
++++
Anvar and I … good friends.
====
# are
====
Is
====
Be
====
Was
++++
Komil is the tallest boy in his group, … ?
====
#isn't he
====
is he
====
isn't she
====
is she
++++
… you a pupil? No, I … a student.
====
#are/am
====
is/am
====
are/are
====
is/is
++++
Is this … bag? No, … is not here.
====
#your/mine
====
my/your
====
your/my
====
yours/mine
++++
This bag is … than the other one.
====
#heavier
====
Heavy
====
more heavy
====
the most heavy
++++
What is … phone number? May … call … ?
====
#your/I/you
====
your/I/your
====
yours/I/yours
====
my/I/your
++++
… anything in your pocket?
====
#Is there
====
there is
====
are there
====
there are
++++
There are … pictures on the wall.
====
#some
====
Any
====
Little
====
Much
++++
She ____ to school every day.
====
# goes
====
Go
====
Going
====
Went
++++
They ____ football on Sundays.
====
# play
====
Plays
====
Playing
====
is played
++++
My father ____ tea in the morning.
====
# drinks
====
Drink
====
Drinking
====
Drank
++++
We ____ TV in the evening.
====
# watch
====
Watched
====
Watches
====
Watching
++++
The sun ____ in the east.
====
# rises
====
Rising
====
Rise
====
Rised
++++
"Tom and Jerry" ____ a famous cartoon.
====
# is
====
Are
====
Am
====
Be
++++
She ____ English very well.
====
# speaks
====
Speak
====
Speaking
====
Spoken
++++
I ____ my homework after lessons.
====
# do
====
Does
====
Doing
====
was doing
++++
He ____ early in the morning.
====
# wakes up
====
wake up
====
waking up
====
woke up
++++
I live …. Tashkent.
====
#in
====
at
====
From
====
Under
++++
It …the center of Andijan region.
====
#is
====
are
====
was
====
Were
++++
Farmers ….a lot of fruits and vegetables.
====
#grow
====
grows
====
growed
====
groow
++++
I and my brother … in the center of the city now.
====
# are
====
is
====
Were
====
was
++++
I ____ swim very well.
====
# can
====
Must
====
May
====
Be
++++
You ____ wear a seatbelt while driving.
====
# must
====
Can
====
Are
====
May
++++
____ I ask you a question?
====
# may
====
Is
====
Must
====
Are
++++
She ____ be at home now.
====
# must
====
Can
====
Is
====
May
++++
The plural of "child" is ____.
====
# children
====
Childs
====
Childrens
====
childes'
++++
The plural of "man" is ____.
====
# men
====
Mens
====
men's
====
Mans
++++
The plural of "tooth" is ____.
====
# teeth
====
teeths'
====
Tooths
====
Toothes
++++
You ____ eat vegetables if you want to be healthy.
====
#must
====
Can
====
May
====
haven't to
++++
I have … time today, so I can help you.
====
#much
====
a few
====
Little
====
Few
++++
Feruza has some English books at home, …. ?
====
#hasn't she
====
has she
====
hasn't he
====
has he
++++
You ____ not smoke in this building.
====
#must
====
mustn't
====
May
====
Can
++++
____ I use your phone?
====
#may
====
Should
====
Must
====
have to
++++
She …. go to the lesson yesterday, because she was ill.
====
#didn't
====
doesn't
====
don't
====
won't
++++
There is …. water in the bucket, so I can't lift it.
====
#much
====
Many
====
Little
====
a few
++++
They … come back next week.
====
#will
====
Have
====
Did
====
Are
++++
Do you know my phone number?
====
#general question
====
special question
====
alternative question
====
tag question
++++
... you working in the garden now?
====
#are
====
was
====
were
====
Is
++++
I … at the university yesterday.
====
#was
====
were
====
am
====
Is
++++
We … sleeping when the police came.
====
#weren't
====
wasn't
====
isn't
====
aren't
++++
Bahrom is _____ than me.
====
#taller
====
more tall
====
tall
====
the tallest
++++
… is a first-year student.
====
#He
====
His
====
Him
====
Her
++++
There are _____ students in the room.
====
#many
====
much
====
more
====
little
++++
I have _____money in my pocket.
====
#much
====
many
====
few
====
a few
++++
Students are doing ____ homework..
====
#their
====
they
====
them
====
His
++++
I think this is ____ bag.
====
#his
====
him
====
he
====
Me
++++
Is she cleaning ____ room now?
====
#her
====
she
====
he
====
She
++++
This is David.___ is my best friend.
====
#He
====
His
====
Him
====
Why
++++
You went to the hospital with your mother yesterday,_____ you ?
====
#didn't
====
did
====
don't
====
Do
++++
There is a dog in the street, ….?
====
#isn't there
====
isn't it
====
is there
====
is it
++++
When do we celebrate the Independence Day of Uzbekistan?
====
#1st of September
====
31st of August
====
2nd of September
====
December 8 1991
++++
The constitution of our republic was adopted on…
====
#December 8 1992
====
December 8 1993
====
December 8 1990
====
all of them
++++
… saw Jack in the laboratory.
====
#we
====
our
====
Him
====
Ourselves
++++
Your bag is larger than … .
====
#mine
====
my
====
I
====
You
++++
Is this ____ phone ?
====
#your
====
him
====
She
====
We
++++
Oygul is ____ girl in her group.
====
#the most active
====
more active
====
activer
====
the activest
++++
I … 18 years old, but Andrew … 20.
====
#am/is
====
am/am
====
are/am
====
are/are
++++
There are _____ books on the table.
====
# many
====
Much
====
little
====
a little
++++
My sister … her room everyday.
====
#cleans
====
paints
====
sells
====
cooks
++++
My sister ... a daughter and two sons.
====
#has
====
have
====
had
====
haves
++++
They have ____ dictation at the lesson today.
====
#written
====
Wrote
====
Write
====
writing
++++
Nick ____ his hand in the stadium last week.
====
#broke
====
have broken
====
is breaking
====
breaks
++++
He runs … than I do.
====
#faster
====
fast
====
more fast
====
more large
++++
This house is … than yours.
====
#more beautiful
====
beautiful
====
beautifuler
====
beautifulest
++++
These rooms are … than those ones.
====
#larger
====
largest
====
large
====
more large
++++
My brother is … student in his group.
====
#the cleverest
====
clever
====
cleverer
====
most clever
++++
This is … river in this area.
====
#the narrowest
====
narrower
====
narrow
====
more narrow
++++
My mom is … woman in the world.
====
#the most beautiful
====
more beautiful
====
beautiful
====
less beautiful
++++
She is … woman in the office..
====
#the busiest
====
busy
====
busier
====
the most busy
++++
She is … girl in her group.
====
#the tallest
====
taller
====
more tall
====
the most tall
++++
This is _____ ring , I have ever seen.
====
# the most expensive
====
more expensive
====
expensive
====
expensiver
++++
Anatomy is … subject for me.
====
#the most difficult
====
difficulter
====
difficult
====
more difficult
++++
The human heart weighs … than a pound.
====
#less
====
little
====
the least
====
more less
++++
This building is …than that one.
====
#higher
====
highest
====
high
====
more high
++++
She speaks English … than I do.
====
#faster
====
fast
====
more fast
====
fastest
++++
This phone is _____ than that one, I'll buy it.
====
#better
====
gooder
====
the best
====
good
++++
Your today's homework is ____ than you did yesterday.
====
#worse
====
Badder
====
baddest
====
the worst
++++
The Amu-darya river is _____ one in Uzbekistan.
====
#the deepest
====
deeper
====
more deep
====
deep
++++
There is _____ jam in the jar.
====
# a little
====
Many
====
few
====
a few
++++
Do you have ____ English books at your home?.
====
#any
====
some
====
little
====
anything
++++
There is _____ in the box, I can't lift it.
====
#something
====
anything
====
some
====
any
++++
I don't have ____ pens in my bag.
====
#any
====
some
====
something
====
anything
++++
Do you come to school _____ bus?
====
#by
====
on
====
at
====
in
++++
I'm very busy _____ the moment.
====
#at
====
by
====
on
====
in
++++
"Are you from Senegal?" "No, _____ ."
====
#I'm not
====
I amn't
====
I are not
====
I not
++++
Ann is _____ wife.
====
#John's
====
John is
====
John's is
====
John
++++
This is _____ book, they use it at the lessons.
====
#students'
====
student's
====
student
====
student is
++++
I like to _____ this newspaper.
====
#read
====
go
====
live
====
drink
++++
He _____ television every evening.
====
#watches
====
see
====
buy
====
watch
++++
He lives _____ Switzerland.
====
#in
====
on
====
at
====
by
++++
Some students live at the … .
====
#hostel
====
Hospital
====
institute
====
Office
++++
Our group is very friendly. We _______together after our classes.
====
#play
====
are playing
====
played
====
plays
++++
Are you looking for your friend or teacher at the University?
====
#alternative question
====
special question
====
general question
====
tag question
++++
What would you like to become after the University?
====
#special question
====
tag question
====
general question
====
alternative question
++++
We go to the university on foot as we live ________ the University
====
#near
====
far from
====
at
====
in
++++
They_______ in the garden at 5 o'clock yesterday.
====
#were working
====
are working
====
worked
====
have worked
++++
Please, can you bring me _____ water?
====
#a little
====
few
====
many
====
little
++++
Somebody _______ waiting for you outside.
====
#is
====
are
====
have
====
do
++++
We ______ Sumalak with my family next week.
====
#will cook
====
cooked
====
have cooked
====
is cooking
++++
Jack is fixing his car in the street, ___ he?
====
#isn't
====
doesn't
====
aren't
====
hasn't
++++
Lucy bought a new TV set yesterday,______ ?
====
#didn't she
====
did she
====
didn't he
====
did he
++++
We … a meeting tomorrow.
====
#will have
====
have
====
had
====
will
++++
Yesterday we ___ three lectures.
====
#had
====
Had
====
to have
====
has
++++
They ____ you after lessons tomorrow.
====
#will help
====
help
====
have helped
====
are helping
++++
"… are you?" "I'm Alex.
====
#who
====
how
====
what
====
which
++++
What is this…English?
====
#in
====
from
====
at
====
on
++++
"… her name Elize?" "No,… ."
====
#Is/she isn't
====
is/it is not
====
what/she isn't
====
Is/he isn't
++++
Is your surname Anderson?
====
#yes, I am.
====
yes, he isn't .
====
yes, it is.
====
yes, my is.
++++
There are … apples in the basket.
====
#a lot of
====
much
====
a little
====
most
++++
How … people do live in your family?
====
#many
====
much
====
a lot of
====
little
++++
My uncle has … money.
====
#much
====
many
====
few
====
a lot
++++
He has … English books at home.
====
#few
====
little
====
much
====
a little
++++
Can you wait for me … ?
====
#a little
====
much
====
many
====
a few
++++
Listen! … is speaking outside.
====
#somebody
====
anybody
====
nobody
====
something
++++
There is … in the box, it is empty.
====
#nothing
====
something
====
anything
====
somebody
++++
This is the photo… my family.
====
#of
====
at
====
for
====
on
++++
They carried valuable goods from India to Europe on ….caravans
====
#camel
====
horse
====
sheep
====
cow
++++
What are you doing here?
====
#Special question
====
general question
====
Alternative question
====
Tag question
++++
I have some medical books ___ home.
====
#at
====
for
====
in
====
on
++++
There are many people ___ the street today.
====
#in
====
at
====
on
====
with
++++
There are many ____ in the zoo of our city..
====
#wolves
====
wolfs
====
wolf
====
wolfes
++++
The boys …. playing in the street when I came out .
====
#were
====
was
====
are
====
been
++++
My mother and sister … washing dishes now.
====
#are
====
Is
====
was
====
were
++++
Everyday In the morning my father … car to work.
====
#drives
====
cleans
====
keeps
====
cooks
++++
Our neighbor … car now.
====
#is cleaning
====
cleans
====
clean
====
are cleaning
++++
She usually… dinner with the Browns at about 8 p.m.
====
#has
====
is having
====
have
====
had
++++
My sister … not … at home tomorrow.
====
#will / be
====
shall / be
====
is / be
====
were
++++
Students are waiting …. a bus
====
#for
====
of
====
off
====
from
++++
Now they … a big dinner together.
====
#are having
====
has
====
having
====
have
++++
The boys … in the garden now.
====
#are running
====
is running
====
running
====
run
++++
We … a new TV-set last week.
====
#bought
====
has bought
====
will buy
====
is buying
++++
Is there … behind the door?
====
#anybody
====
Something
====
nothing
====
anywhere
++++
Can you drive a car or not?.
====
#Alternative question
====
Special question
====
General question
====
Tag question
++++
This is … bag, that is …..
====
#your/ mine
====
your/ my
====
my/ your
====
mine/yours
++++
David will buy a new car next month.
====
#Future simple tense
====
Present simple tense
====
Past simple tense
====
Present perfect tense
++++
Is there … in your pocket?
====
#anything
====
something
====
nothing
====
anywhere
++++
He has just come to the university.
====
#Present perfect tense
====
Present simple tense
====
Present continuous tense
====
Past simple tense
++++
My mother doesn't like to watch sport programs.
====
#Present simple tense
====
Present perfect tense
====
Present continuous tense
====
Past simple tense
++++
They didn't go to the hospital yesterday, ____ they?
====
#did
====
didn't
====
don't
====
do
++++
We ____ in the afternoon at the plant, but he ____ at night.
====
#work /works
====
walks/walks
====
works/wakes
====
worked/works
++++
They will be sleeping at that time tomorrow.
====
#future continuous tense
====
future simple tense
====
future perfect tense
====
present simple tense
++++
I usually have lunch at home.
====
#present simple tense
====
present continuous tense
====
present perfect tense
====
past simple tense
++++
She lost her money yesterday, ….?
====
# didn't she
====
didn't he
====
doesn't she
====
did she
++++
Who … our teacher yesterday? .
====
# saw
====
see
====
sees
====
has seen
++++
His granny … a lot of stories.
====
#knows
====
Knew
====
has known
====
will know
++++
Who … me today?.
====
# has called
====
have called
====
is calling
====
calls
++++
It's good practice… you.
====
#for
====
at
====
of
====
in
++++
I'm… home.
====
#at
====
in
====
on
====
from
++++
She… uniform everyday.
====
#wears
====
to wear
====
wearing
====
wear
++++
He… his car every weekend.
====
#washes
====
wash
====
washing
====
washed
++++
Rose… three languages.
====
#knows
====
talks
====
tells
====
thinks
++++
My dad… at 7o'clock everyday.
====
#gets up
====
looks up
====
stands up
====
jumps up
++++
She … meal in the kitchen now.
====
#is cooking
====
cook
====
has cooked
====
cooked
++++
Their son… In this hospital.
====
#works
====
Begins
====
starts
====
likes
++++
Jim's a postman. He… letters to people
====
#delivers
====
answers
====
works
====
serves
++++
Jack … a cup in the morning today.
====
#has broken
====
breaks
====
is breaking
====
broke
++++
I … him at the station last week.
====
#saw
====
see
====
has seen
====
sees
++++
We … a new car next month.
====
#will buy
====
bought
====
buy
====
have bought
++++
My sister … make dresses.
====
#can
====
have to
====
may
====
should
++++
You … clean your teeth every day.
====
#must
====
may
====
can
====
are
++++
… I open the window, please.
====
#may
====
must
====
can
====
have to
++++
What …I do for you?
====
#can
====
have to
====
should
====
could
++++
We … do our homework everyday.
====
#must
====
can
====
may
====
need
++++
There is … teacher in … room.
====
#a/the
====
a/a
====
the /the
====
some/the
++++
… Browns live in London.
====
#the
====
a
====
some
====
no article
++++
Your uncle likes to play chess,…?
====
#doesn't he
====
does he
====
isn't he
====
is he
++++
I am going to buy a new car next week.
====
#future simple tense
====
present simple tense
====
present continuous tense
====
present perfect tense
++++
Did you call me yesterday or not?
====
#Alternative question
====
General question
====
Special question
====
Tag question
++++
Now they … a big dinner together.
====
#are having
====
has
====
having
====
have
++++
synonym " like"
====
# to be fond of
====
to think
====
to hate
====
to miss
++++
antonym " long "
====
# short
====
Deep
====
little
====
sweet
++++
Jane and Jack live not far from the University. … takes … 5 minutes to get there.
====
#It/them
====
It/they
====
They/ it
====
He/ them
++++
She loves children and looking after … . I think she is wonderful teacher.
====
#them
====
They
====
her
====
him
++++
Where … your brother yesterday?
====
#was
====
Were
====
is
====
are
++++
All students … … at university at 8 a.m. tomorrow.
====
#will be
====
Are
====
won't
====
will
++++
The food isn't Italian. ___is Spanish.
====
#it
====
She
====
Its
====
He
++++
Are they from Australia?" "No, they __________.
====
#aren't
====
are
====
not
====
isn't
++++
We __________ English. We are Scots.
====
#aren't
====
are
====
is
====
isn't
++++
When I … home yesterday, my mother … meal in the kitchen.
====
#came/was cooking
====
come/ cook
====
is coming/ is cooking
====
came / cooked
++++
How many languages … you ….?
====
#do/speak
====
does/speak
====
do/speaking
====
does/speaking
++++
We … tennis on Monday evenings, but my little sister … on Sundays.
====
#play/plays
====
play/play
====
plays/plays
====
playing/play
++++
There are … sandwiches, but there aren't … chips.
====
#some/any
====
some/some
====
any/some
====
any/any
++++
In our garden there is … big pine tree, and there are … bushes.
====
#a/a lot of
====
a/ much
====
an / a lot of
====
the/ many
++++
How much are … glasses?
====
#these
====
This
====
that
====
they
++++
I go … work … bus.
====
#to/by
====
at/on
====
at/at
====
to/at
++++
She was … the cinema … her brother.
====
#at/with
====
in/in
====
on/of
====
of/with
++++
look … this photo … my brother, he is so young.
====
#at/of
====
of /on
====
in/in
====
in/at
++++
… garden is bigger than … .
====
#their/ours
====
theirs/ours
====
their/our
====
they/ours
++++
This book isn't … , it is … .
====
#mine/yours
====
my/your
====
mine your
====
my/yours
++++
We have …. at 7 o'clock in the morning.
====
#breakfast
====
Lunch
====
dinner
====
supper
++++
He has broken an expensive vase today.
====
# present perfect tense
====
present simple tense
====
present continuous tense
====
past simple tense
++++
Nick didn't know her problems, did he?
====
#Tag question
====
alternative question
====
general question
====
special question
++++
Tom and Tim … for lunch tomorrow.
====
#will come
====
Come
====
came
====
comes
++++
…. boots are these?
====
#whose
====
What
====
where
====
which
++++
I will be working in the garden at 3 o'clock tomorrow.
====
#future continuous tense
====
future simple tense
====
future perfect tense
====
perfect simple tense
++++
There is …. sugar in the cup.
====
#little
====
Few
====
many
====
A few
++++
I have …. friends at the university.
====
#some
====
A little
====
Much
====
Little
++++
Why are you shouting at me?
====
#Special question
====
General question
====
Alternative question
====
Tag question
++++
Find plural form of the word "hero"
====
#heroes
====
heros
====
hero's
====
heros'
++++
There is …. flour in the sack.
====
#much
====
few
====
many
====
A few
++++
Your uncle won't sell his car tomorrow, ….?
====
#will he
====
Is he
====
won't he
====
isn't he
++++
When I … home yesterday, my mother … cooking meal in the kitchen.
====
#came/was
====
come/is cooking
====
have come/cooked
====
Is coming/ has cooked
++++
Who … chess with Jack last night?
====
#played
====
did play
====
Is playing
====
have played
++++
My brother …. two sons and a daughter.
====
#has
====
Have
====
to have
====
Is having
++++
Jack is …. than Nick.
====
#taller
====
the tallest
====
tall
====
more tall
++++
Jack is … than Tom.
====
#more active
====
active
====
The most active
====
the activest
++++
Can you fix a car or not?
====
#Alternative question
====
Special question
====
General question
====
Tag question
++++
There is … behind the door.
====
#somebody
====
some
====
any
====
anybody
++++
I have … time today.
====
#much
====
many
====
a few
====
few
++++
There is nobody in the yard, …. ?
====
#Is there
====
Isn't there
====
Is it
====
Isn't it
++++
She didn't go to the shop yesterday.
====
#past simple tense
====
past continuous tense
====
past perfect tense
====
present perfect tense
++++
Good morning! How are you?
====
#I'm fine, thanks
====
Yes I am.
====
I am at home
====
I have two brothers
++++
They play football everyday, … ?
====
#don't they
====
aren't they
====
are they
====
do they
++++
He has … English books at home.
====
#a few
====
much
====
little
====
a little
++++
Who …. to cook a cake today?
====
#wants
====
do want
====
does want
====
Is wanting
++++
It …. Monday today.
====
#is
====
am
====
are
====
the
++++
This … my friend. … name is Richard.
====
#is/ his
====
are/her
====
Is/my
====
his/his
++++
They… Lisa and Max. They …. From the USA.
====
#are/are
====
Is/is
====
are/is
====
Is/are
++++
What …name? My name is Carlos.
====
#your
====
my
====
her
====
his
++++
…. John give you those flowers?
====
# Did
====
have
====
was
====
Is
++++
Mary has no milk in ….. cup.
====
#her
====
his
====
hers
====
she
++++
Children are in ……. room.
====
#their
====
them
====
theirs
====
they
++++
There are lots of ___ in the street.
====
#shops
====
books
====
pens
====
bags
++++
She ___ in the kitchen with her mom..
====
#cooks
====
washes
====
wash
====
washing
++++
….best runner in the race was …. young girl.
====
#the/ a
====
a/an
====
the/-
====
-/the
++++
It is quarter past three.
====
# 3:15
====
4:15
====
5:15
====
3:45
++++
"Where …. she from?" "She …. from Japan."
====
#is/is
====
are/is
====
Is/am
====
are/are
++++
I have ______ brother. ______ name is David
====
#a/his
====
an/his
====
a/her
====
his/his
++++
"…. did you buy your new jacket?" - "At the supermarket."
====
#where
====
what
====
when
====
How
++++
Paris is _____ Madrid.
====
#bigger than
====
big than
====
bigger
====
biggest
++++
Mr. Black has a French book in ……. library.
====
#his
====
he
====
him
====
her
++++
Nancy's uncle is a pilot. He …. all over the world.
====
#travels
====
goes
====
sees
====
delivers
++++
In winter Sheila _____ skiing and in summer _____ tennis.
====
#goes/plays
====
makes/plays
====
does/plays
====
starts/ play
++++
Most of the people _____ their work at 8 o'clock every morning.
====
#start
====
finish
====
go
====
wash
++++
He _____ television every evening.
====
#watches
====
watch
====
sees
====
buys
++++
Every time he _____ a glass of lemonade before breakfast.
====
#has
====
have
====
Is
====
does
++++
At ten we go _____ bed.
====
#to
====
on
====
In
====
from
++++
Our teacher gives _____ a lot of homework.
====
#us
====
our
====
her
====
his
++++
She lives _____ Switzerland.
====
#in
====
at
====
on
====
city
++++
What _____ you _____ at the weekend?
====
#do/do
====
does/does
====
do/does
====
does/do
++++
Philippe _____ in London.
====
#lives
====
work
====
starts
====
comes
++++
"Does she live in Australia?" "No, she _____."
====
#doesn't
====
do
====
don't
====
does
++++
_____ _____ languages does she speak?
====
#How many
====
How much
====
Why
====
Where
++++
What are you cooking?
====
#Special question
====
Alternative question
====
General question
====
Tag question
++++
_____ languages can Mrs. Brown speak? B: English & Irish.
====
#What
====
How
====
Why
====
Where
++++
They were _____ England _____ 1998.
====
#in/in
====
at / in
====
at /of
====
for/in
++++
He _____ some new shoes last month.
====
#bought
====
buying
====
buy
====
buys
++++
Rosemary often _____ to work by bus, but she _____ to work by taxi yesterday.
====
#gets / got
====
got / get
====
get / got
====
got/got
++++
Ann usually _____ to work, but yesterday she_____ .
====
# drives / walked
====
drive / walks
====
drove / walked
====
drive / walk
++++
Where _____ she live now ?
====
# does
====
did
====
do
====
Is
++++
'Did she go to the cinema last night?' 'No, she ______.'
====
#didn't
====
did
====
can
====
can/t
++++
Today's the third _____ April.
====
#of
====
on
====
In
====
at
++++
They …. football in the stadium now.
====
#are playing
====
play
====
played
====
was playing
++++
I _____ him three months ago.
====
#saw
====
see
====
sees
====
seen
++++
I _____ bread every morning.
====
#buy
====
bought
====
sell
====
buying
++++
Tom and Tim _____ for lunch tomorrow.
====
#will come
====
to come
====
coming
====
came
++++
"_____ did you buy?" "A new jacket."
====
#what
====
who
====
when
====
how many
++++
There is …. tea in the cup.
====
#a little
====
many
====
few
====
a few
++++
I think, there is …. under the bed.
====
#somebody
====
anybody
====
some
====
any
++++
He …. an expensive vase in my room today.
====
#has broken
====
have broken
====
Is breaking
====
break
++++
When you …. called me yesterday, I …. at that time.
====
#called / was sleeping
====
called / sleep
====
has called /is sleeping
====
call / sleep
++++
Ann usually _____ to work, but yesterday she_____ .
====
# drives / walked
====
drove / walked
====
drive / walk
====
drive / walks
++++
My dad _____ at 7 o'clock everyday.
====
# gets up
====
looks up
====
stands up
====
jumps
++++
Where _____ you go yesterday?
====
#did
====
was
====
have
====
were
++++
_____ you ever been to Amsterdam?
====
#have
====
do
====
does
====
did
++++
Person who controls a game is ______.
====
#referee
====
player
====
score
====
spectator
++++
The knife was very ______. I cut my finger.
====
# sharp
====
dirty
====
huge
====
ordinary
++++
Can you give me _____ money?
====
#some
====
few
====
any
====
many
++++
"_____ you _____ your teacher?" "Yes, he is a good man."
====
# Do /like
====
Have / liked
====
Are /like
====
Did / liked
++++
How _____ milk is there in the fridge?
====
# much
====
many
====
a lot
====
few
++++
"Are you Canadian?" "No, but I have _____ good friends in Canada."
====
# some
====
any
====
much
====
a little
++++
Where do you come _____ ?
====
#from
====
in
====
at
====
out
++++
I get up _____ six o'clock _____ Tuesdays.
====
#at /on
====
at /in
====
In /from
====
under / out
++++
Is there _____ juice in the fridge? B: No, there isn't _____ juice, but there is _____ lemonade.
====
# any / any / some
====
some / some / any
====
some / any / any
====
any / any / any
++++
We _____ tennis on Monday evenings, but my little sister _____ on Sundays.
====
# play / plays
====
play / play
====
plays / plays
====
plays / play
++++
My groupmates _____ on picnic every month.
====
#go
====
goes
====
went
====
going
++++
Her sister doesn't _____ eating a hamburger.
====
#like
====
likes
====
liked
====
liking
++++
His father _____ , but Bill's father _____ smoke.
====
# smokes / doesn't
====
smokes / don't
====
smoke / don't
====
smoke / doesn't
++++
We always _____ lemonade in the evenings.
====
#drink
====
drinking
====
drinks
====
have drunk
++++
_____ your wife _____ English? B- Yes, she does.
====
# Does / speak
====
Do / speak
====
Does / speaking
====
Do / speaking
++++
I _____ my teeth every morning.
====
# brush
====
brushing
====
brushes
====
to brush
++++
Mary _____ face every morning.
====
# washes her
====
wash my
====
washes his
====
washes their
++++`

	try {
		return {
			data: questionsData,
		}
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Failed to load questions",
		})
	}
})
