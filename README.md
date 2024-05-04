# Toddle-Journal-Backend
Task:
Build a simple stateless microservice with the following API endpoints: <br/>
● Authentication endpoint <br/>
● REST API endpoints for a journal app (details below) <br/>

API Details: <br/>
1. Authentication endpoint: <br/>
● This will be a public endpoint. <br/>
● The request body will contain an arbitrary username/password pair. <br/>
Note: Treat it as a mock authentication service and accept any
username/password. Password comparison should be present.<br/>
● Return a signed JSON Web Token (JWT, https://jwt.io/) which can be<br/>
used for validation in future requests.
2. Journal REST API endpoints:<br/>
The following endpoints should be protected. The JWT obtained in the
“Authentication” endpoint will be attached to each request. If the JWT is
missing or invalid, these endpoints should reject the request.
A journal refers to a written and visual account of what
a child has done in a classroom. (A journal feed is
similar to an Instagram feed)<br/>
The journal will have the following features:<br/>
● There are two types of users in the system<br/>
○ Teacher<br/>
○ Student<br/>
● Journals are the written and visual descriptions
of a student activity done in the classroom<br/>
● Journal can only be created, updated, and
deleted by the Teacher.<br/>
The journal consists of a description, a list of students tagged, and
when it was published.<br/>
● The journal can also contain an attachment, which can be of the
below-mentioned types:<br/>
○ Image<br/>
○ Video<br/>
○ URL<br/>
○ PDF<br/>
● A journal feed is generated for students and teachers based on the
below filters:-<br/>
○ Teacher feed - The teacher can see all the journals that the
teacher has created themself.<br/>
○ Student feed - The student can see all the journals in which they
are tagged.<br/>
● The Journal published_at is a date-time field at which the journal
needs to be published, if the journal is scheduled for the future then it
should not appear in the student's feed.<br/>
Create protected REST endpoints for the following:<br/>
● Create/ Update/ Delete a journal as a teacher<br/>
● Publish a journal as a teacher.<br/>
● Journal feed as a teacher and student.<br/>
● Journal feed<br/>
○ For the teacher, the feed will return all the journals created by the
Teacher<br/>
○ For students, the feed will return all the journals the student has
been tagged.<br/>
