# Toddle-Journal-Backend
Task:
Build a simple stateless microservice with the following API endpoints: <br/>
● Authentication endpoint <br/>
● REST API endpoints for a journal app (details below) <br/>

API Details: <br/>
1. Authentication endpoint:
● This will be a public endpoint.
● The request body will contain an arbitrary username/password pair.
Note: Treat it as a mock authentication service and accept any
username/password. Password comparison should be present.
● Return a signed JSON Web Token (JWT, https://jwt.io/) which can be
used for validation in future requests.
2. Journal REST API endpoints:
The following endpoints should be protected. The JWT obtained in the
“Authentication” endpoint will be attached to each request. If the JWT is
missing or invalid, these endpoints should reject the request.
A journal refers to a written and visual account of what
a child has done in a classroom. (A journal feed is
similar to an Instagram feed)
The journal will have the following features:
● There are two types of users in the system
○ Teacher
○ Student
● Journals are the written and visual descriptions
of a student activity done in the classroom
● Journal can only be created, updated, and
deleted by the Teacher.
The journal consists of a description, a list of students tagged, and
when it was published.
● The journal can also contain an attachment, which can be of the
below-mentioned types:
○ Image
○ Video
○ URL
○ PDF
● A journal feed is generated for students and teachers based on the
below filters:-
○ Teacher feed - The teacher can see all the journals that the
teacher has created themself.
○ Student feed - The student can see all the journals in which they
are tagged.
● The Journal published_at is a date-time field at which the journal
needs to be published, if the journal is scheduled for the future then it
should not appear in the student's feed.
Create protected REST endpoints for the following:
● Create/ Update/ Delete a journal as a teacher
● Publish a journal as a teacher.
● Journal feed as a teacher and student.
● Journal feed
○ For the teacher, the feed will return all the journals created by the
Teacher
○ For students, the feed will return all the journals the student has
been tagged.
