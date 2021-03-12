# capstone_team_stone_with_cap
Alexa Open House
Capstone: Project Proposal
Guillermo Betancourt, Luis Domenech, Luis Rampolla
1. Introduction
Technological progress has allowed software to be incorporated to practically every field to develop applied solutions. In recent years one of the biggest value propositions software has had to offer is the automation of specific business processes by applying various technologies and reducing operation costs. This can be achieved by combining a careful analysis of the desired process which will be automated with the technologies that enable us to automate the process. Business processes that are repetitive, time consuming and frequent should be automated to increase the efficiency and throughput of business operations.

Real Estate agents are involved in various complicated business processes. One of them being having to show clients a property. In itself, it is a repetitive task that takes away too much time from the real estate agents with simple actions such as data collection, answering questions and monitoring the client through the house. In our current climate, smart devices are capable of most of the actions required to give a property tour. This drove us to find ways to incorporate the increasing capabilities of smart devices to reduce cost in operation expenses by automating realtor property tours and increasing the data collected on each visit. 

With the dawn of the pandemic, we have seen the need to reduce human contact when appropriate to avoid propagating diseases. By having a virtual assistant available to guide you through a property tour and answer any of the questions you might have about a property, we are able to limit the contact, automate the process and increase data collection about what clients might think about the property. 
2. Problem Statement
The way businesses carry out their operations is in constant evolution by trying to maintain a steady trade off between operation costs and revenue. Business processes often become obsolete and require improvements to enable a company to adapt to the market’s new structure. Realtors are involved in a repetitive, time consuming and exposed workflow that might not lead to a potential sale. Time and money is spent keeping the realtor touring with customers through the same properties answering similar questions to multiple clients. 

The business process should be reevaluated to assess the impact of replacing human assisted property tours with virtual-assistant assisted property tours with the help from smart devices to automate open house sessions with IoT devices to guide and monitor potential buyers without the need of a realtor. To establish a proper automated process it is necessary to create an interaction and data collection framework that meets the requirements and wishes of the client. 
Target Domain and Actors
Applied technologies have limitless potential when developers take time to explore the underlying domain where their problem resides. In essence, we are trying to reduce operational costs through the elimination of redundancy and repetitive work required by a realtor. The domain required to effectively develop a solution that facilitates the realtors workflow is the Automating Business Processes within the Real Estate domain. This means we have to map out the business process we would like to automate as well as the process by which we are guaranteeing the same or greater level of efficiency throughout. Real estate is focused on facilitating business among sellers and buyers of real estate properties guaranteeing that both parts have a medium through which conflicts and concerns can be resolved. We can leverage a domain breakdown from the real estate domain [1] to outline the specifics of which objects and actions should be considered. 

The main client for our application is the real estate agency that desires to automate the repetitive process of touring potential clients through a property tour. The actors that are involved in this process within our domain are:

The client who is a potential customer that’s interested in a property managed by the realtor
The realtor which is the agent tasked with closing out the sale of the property. It is tasked with managing the question bank and setting up the virtual assistant.
The virtual assistant which is an Alexa based application which answers questions from a question bank and collects information from property tours. 

The main objects that our application would manage would be the properties being listed by the realtor and the virtual assistant that would interact with the customer and thus automate the property tour process. The realtor is the actor whose process we are trying to automate so, it is important to map out his actions so that we can carefully select how and where our virtual assistant will be able to aid in automating the process. The property object will be described with a preliminary structure as we learn from future prototypes what information we should focus on collecting. 

The main processes carried out by the realtor by interacting with the property and the client are: 

Scout - Search for new houses to sell.
Promote - Generate exposure for current listings to compete in the market. 
Negotiate - Handle price, property and any other concern raised by the client.
Tour
Answer Inquiries - manage bank of questions, log amount , insight into client preferences.
Guide
Gather feedback 

Schedule -  Schedule meetings, tours and negotiations.
Manage Properties - List them, delist them and edit specifications.

The virtual assistant will be implemented to automate the tour process which is composed of answering inquiries from the property,  detailing information about the property, its rooms, surrounding areas and collecting feedback from the client. Each room would hold a question bank that guides the interaction with the client as he walks through the house.  
Proposed Innovation
The rise of IoT based applications have made them a viable option when discussing possible implementations within business automation which requires automation and data collection. Utilizing Amazon’s Alexa virtual assistant, we can develop an Alexa Skill that guides clients in a property tour with an interactive conversation based on making questions to alexa devices spread across the house. The application would allow realtors to customize questions and answers for the virtual assistant and quantify the times questions are asked to data incorporate data analysis.  The application is hosted in the cloud and accessed via a web page to add, edit and delete properties as well as the speaker set up.  
We are applying business automation within the final phases of the high level process of closing out a deal. Realtors often scout, improve, promote and tour guide properties as part of their day to day workflow.  As outlined in the domain discussion the realtor engages in various processes , our application focuses on the touring process which includes answering questions, providing them with a guided description of the property and collecting feedback. 
3. Project Objectives
Initial Objectives
The approach taken within the project is focused on automating a process that would maximize efficiency, minimize the costs and increase data-driven decision making. Since we need specific objectives that are measurable and relevant to the task at hand, our objectives are focused mainly on the benefits added to the realtor. Our approach will focus on comparing the difference from realtor workflows that incorporate our automated process against workflows that do not. This way we are able to measure if automating the process actually leads to reducing the time spent on repetitive workflows and increases the speed of business operations. 
Increase realtor efficiency by reducing the time spent by realtors on property tours by at least 25%.
Alexa Skill must be able to achieve a satisfactory service that is at least as half as satisfactory as a regular human assisted property tour.
The application’s ease of use should be satisfactory to realtors so as to minimize the system setup overhead. 
Develop a rudimentary data collection framework that helps with data driven decision making by collecting at least two domain relevant features.

Regarding objective 4, data collection is an important part of the product as data can help realtors adjust their questions and answers accordingly. However, we only want to implement a simple data collection framework which can be expanded upon later. The product’s main focus is property tour assistance and as such, development of that requires the utmost attention first. This objective can be measured by the number of features the finished product can collect for analysis. Analysis of this data is outside of the scope of the project.

Regarding objective 2, using the word “satisfactory” can be ambiguous, hence we further specify what we mean by them. By a “satisfactory service”, we mean a service that doesn’t hinder the client’s experience in an overly negative way. The success for this particular objective will depend on a  product test where we will have 24 clients separated into 2 groups of 12 clients each Group A will experience a property tour whilst assisted by a human. However, Group B will experience a property tour assisted by the finished product. Afterwards, a questionnaire will be handed out to all clients after their respective tours for them to rate their experience on various attributes on a scale from 1 to 10. The average of all the scores in a sole questionnaire will be used as a general satisfaction metric. For both groups, an average satisfaction score will be calculated based on all questionnaires. Our objective is for the property tour assisted by our product to score at least half as much as the satisfaction score of the human assisted group. By this test, we can measure this objective and determine whether our product performed well in accordance to our scope.

Regarding objective 3, the same idea applies as objective 3. In order to measure intuitiveness, the realtor will use the front end application and after its use, will fill out a form detailing his experience. The questionnaire will have him rank the experience on various attributes from a scale of 1 to 10 and averaging these scores will give us a general sense of the intuitiveness of the front end application. If the score ends above a certain threshold, we declare the front end to be intuitive and thus a completed objective.

As stated above, a test will be conducted where clients will then be given a questionnaire to measure their experience. The idea is to use the data to measure the effectiveness of the Alexa Skill. However, during the test, more data will be collected to determine the value of automating this business process. In essence, we would be comparing two different workflows. one with a human guide and another with the Alexa devices. Collecting this data on these different workflows will allow us to better compare the value of automation in this specific domain. By completion of these 4 objectives, we would have created the intended product and assessed that the product’s value in the real estate domain is positive and thus provides a value to real estate agencies.  
4. Solution Approach
We are proposing to automate, to a degree,  touring a property by answering inquiries through the deployment of an Alexa skill that serves as a guide for the clients and a data collection agent for the realtors. Clients can have an initial view of the house on their own while a virtual assistant is nearby with a question bank ready to answer any question. The use of virtual assistants will also allow us to log the questions asked to guide the realtor in further negotiations. The application would be accessed through a web client by the realtor to set up his properties along with the question banks for each room. It would also interface with the clients but through the alexa skill to provide a tailored approach and guide them through the room. When introducing the domain we highlighted that we wanted to automate the touring process of the realtor to reduce operational costs and increase realtor throughput. Our focus would rely on automatting three actions within the aforementioned touring process. 

The processes to be automated are:

Guide - Through the use of key words asked by the client, Alexa would reply to the client with a basic house room layout explanation as well as available question examples.
Answer inquiries - Clients should be able to ask any questions to alexa who would verify our database for possible answers or execute a feedback loop to log an unknown question and alert the realtor
Gather feedback - By collecting question information and client interactions our virtual assistant will allow for deeper feedback loops while automating the process. 
Gap with existing solutions
Although virtual assistants have increased in use, their applied solutions are still in the early stages. Currently, there is no dedicated application to leverage Amazon’s Alexa virtual assistant to automate client interactions with a realtor while touring a property. There are some Alexa skills that initially attempted to automate this process. For example, TalkToTheHouse, which promised to include common alexa settings for realtors and house showcasing but has since lost support and functionality [2]. Existing solutions are limited to custom question based applications such as the customQ&A blueprint provided by Amazon. However it would lack the property management required to set up the questions for each individual room, as well as the keywords that would guide the clients through a basic layout. Current solutions are not applied to any specific domain besides custom alexa answers. 

There are currently no solutions that allow to manage property listings and custom room question banks that would allow for a virtually assisted house tour that automates the initial house screening done by clients and continually repeated by realtors. 
Value Proposition 
Virtually assisted property tours leverage cutting edge technology to automate property tours within your real estate workflow. As a realtor, you would only need Alexa enabled devices and internet access to use our cloud based property management system which would serve to create the questions and answers for each room in the property. It automates touring through the use of keywords that clients use to ask anything about the house. With the use of the question bank from each room our application guides users throughout the house  and collects information about the user interaction to enable data-driven decision making. Automating the touring process means the realtor can focus on promoting and connecting with new clients while increasing the amount of tours and feedback collected. 
Benefits and Limitations 
The limitations of our solution are quite clear with the actions we seek to automate. We focus on touring, answering inquiries and data collection. Our solution is blind to any other factor within the real estate process. This means realtors are responsible for scheduling and securing their properties. Our system boundary is mainly focused on the specific repetitive actions the realtor took hence it will only answer certain questions while including a feedback loop to include answers to new questions. However, the weakness given to us by narrowing our focus to the realtors actions within his process gives our solution its greatest strength. Our applied focus allows developers to focus on what can actually be automated within real estate with today’s landscape and avoids being the be all and end all solution that tries to automate every aspect of the business process. Our goal is a lightweight service experience that could be easily paired with existing security and real estate solutions. 

The main benefit from our application is the automation of a repetitive business process that opens up new ways to streamline productivity in traditional real estate operations. Its cloud based nature provides a seamless set up. The only overhead added would be the question bank set up which comes with preloaded questions taken from the initial property registration form.  
Commercial Potential
Even though commercial potential in automating a business process seems to be self-evident,  we can not say with certainty the direct impact our solution would have on existing realty services without testing it. The market domain for our application is clearly real estate, it intends to create shifts in the current business model. Our main drive has been the evolution of digital sales throughout the COVID-19 pandemic. The reliance on digital services and their adoption has seen a wide increase. By having this foresight the need for frameworks which begin automating parts of the real-estate process is evident. 

It wouldn't be a surprise if the real-estate business model gets shaken up by a tech giant, such as Amazon, when it seeks to sell even properties on their online stores. Currently commission average is at 5-6% of the property’s value, which is later split between realtor and buyer [3]. By laying the groundwork to shift the way real estate would need to operate costs would be reduced. It is a building block in the future of real estate automation which will be a sought after market in the era of automation.
Resources Required for Operation
The product will be prototyped and serve as a proof of concept.  Since it is hosted on the cloud, it functions as a software service that would require monthly fees for hosting. The initial services which would be used are Heroku for our web-application and AWS Lambda for our Alexa Skill interaction. Average variable costs per month besides initial cost of amazon powered devices is around $35, $25 for the heroku service and an average of $10 for the function calls to the AWS Lambda service. The list of resources can be observed from 2 points of view. From the developer’s point of view and the realtor’s point of view. Since we have yet to see adoption and posible scale a subscription fee in the proposal sounds premature before assessing possible adoption. 

From a developer’s perspective:
Heroku Hosting Service
Amazon AWS 
Amazon Alexa Devices

From the realtor’s perspective:
Internet Connection 
Amazon Alexa Devices

Intellectual Property
The Intellectual Property handled by our application is completely owned by the real estate agency that utilizes our application. All of the information handled by our application could also be accessed through the public listings made by the realtor, any additions are up to the realtor managing the application. The only proprietary piece of information we generate is the data collected from the question behavior which will be made private to the corresponding realtor and will maintain anonymity from the client’s side. 

5. Technical Description
The application will leverage the cloud based nature of IoT devices and build the necessary components around it to enable real estate touring automation. The software follows a layered architecture that incorporates the way communication through three main components. 

Figure 1: Layered Architecture
System Architecture
The layered system architecture allows us to establish a workflow across the main services of the application while managing the communication needed in a modular approach. This allows for the possibility of future microservice additions such as an ETL microservice that connects to the backend that can be either scheduled or triggered periodically and won’t consume the backend’s resources. The 3 necessary services are the webapp frontend service, our backend-API that will essentially serve alexa and the front end with information, and the Alexa skill which users will utilize to ask questions. Both the frontend and Alexa services will follow a client-server architecture with the backend. The backend in turn will be a REST API.

UI Layer - Front end components. One react application to manage the properties and one alexa skill to interact with the clients.
Application Layer - Backend-API that would be tasked with managing the domain objects and preparing the house tour.
Domain Layer - Entity Objects that models the domain to enact the required operations. 
Infrastructure Layer - Composed of the modules that commits information to the database and validates the information to be stored in the database.


Modules
Frontend (React Front-End): 
This is how the realtors interact with the database to create new open houses, set up their Alexa devices, provide answers to questions, etc. This module will be implemented in React. The basic idea is that realtors will log in to our webapp with their credentials and see a dashboard with all their currently active listings in our system with an option to add a new one. Once they click on one of the listings, they will be led to that listings page where they can choose how many Alexa devices they will have in the property, in which rooms, and add a question pool with possible questions people looking at the property might have.

Frontend (Alexa Skill): 
For open house attendees, referred to as clients throughout this document, to ask questions, we will make an Alexa skill with Amazon’s Alexa development kit that automatically handles the parsing of speech and based on our set of questions, determines which question the user is trying to ask. It is then able to make a request to our API at that question’s endpoint and get a response back. In the event that Alexa doesn’t recognize the user’s question as one of the predefined questions we have set, we plan to make a request to our API either way and pass through the question for the case that the question is a custom one set up by the realtor. If there is no answer for the asked question, we plan to tell the client to call their realtor, and possibly notify the realtor about the question through an unknown question bank that will be shown to the realtor. 

Backend (Flask-webserver  and database access objects): 
This will be a typical REST API built with Flask that will give back the frontend services the data they need to either show the state of a listing, add, edit, or delete listings in the case of the realtor webapp, or answer the clients questions in the case of the Alexa app.
ER Diagrams: Postgres Database Entity Relationship Diagram
Below we can observe a preliminary diagram of the structure and relations on the planned database to be created on Postgres. First, we have the Realtor entity which has it’s unique id. Since this project is a proof of concept, only name, email and password information is stored in the database. This provides us with enough information to develop the basic functions of the project. A realtor has a one to many relationship with the Property entity since a realtor can manage multiple properties. The Property entity stores basic information about the property and this serves as the basis to answers to what we identify as Default Questions. These are questions that are general about all properties like the lease and the date it was built. These Default Questions are set up in the Alexa skills. Besides basic info on the property, the Property entity has a one to many relationship with Rooms as a property can have multiple rooms. The Room entity also stores basic info like the name of the room and the square footage. These are used to answer Default Questions too. Additionally, in this Room entity we store the unique id of the Alexa associated with the room. For now, only one Alexa operates per room, as setting up multiple ones can cause confusion on the client’s side and much extra work on the developer’s side. As such, only one id is associated per Room. A Room has a one to many relationship with Questions and Unknown Questions. A Room may have custom questions, so in the Questions table is where they’re stored. In the case that the client asks a question that is not found anywhere else, the question is added to the Unknown Questions table for the realtor to later observe. The Question entity simply has a question and answer. However, it also has a hits counter that increases every time it is called. This is used for data collection. 

Figure 2: ER Diagram


UI Wireframe: Listing Showcase
A preliminary design of the UI was made to conceptualize the idea. On the left we see a hamburger menu where you will be able to see all your listings, switch between them or add a new one, and other options such as a settings page and a sign out button. Once you click on a listing you will be redirected to a page like the one on the right hand side of the image. Here you will fill out general information about the property such as the square footage, asking price, etc. This is the information that the system will use when people ask Alexa general questions such as “What is the square footage?”. This also allows the realtor to only have to set 1 answer for a question that might have different phrasings but the same answer: like in the way “How much is the house?” and “What is the asking price?” are both referring to the asking price of the property. These general questions will be chosen from some of the most asked questions in a property viewing [4, 5].

There is also a section for Rooms and Devices where the realtor will set up however many devices they want in the property and assign each one a room. The rooms will also have some optional fields to fill out to answer basic questions (not shown in the screenshot) and will have the option to add custom questions. These are questions that we (the development team) haven’t thought about yet but the realtor might think they are relevant or that people have asked in the past. The idea is to use data about these questions and how many times they are asked to expand our pool of basic questions.


Figure 3: Alexa Setup Wireframe (web app)

Algorithm Flowcharts: Alexa Skill Algorithm Flowchart
The following flowchart demonstrates the general flow of how the Alexa skill should operate. After the Alexa is turned on, it will stay in standby mode waiting for a command. After the client uses the predetermined command to access the Alexa Open House skill, it will prompt the client for questions. After the client says their question, the Alexa skill will determine if the question asked is a Default Question. If it is, it will answer it. If it isn’t, it will check if the questions asked correlates with a question in the database. If it does, it outputs that answer, else it will say it doesn’t know the answer and store the question as an Unknown Question.

Figure 4: Tour Flowchart


Engineering Constraints
As the service overall is a web based service, many engineering constraints arise due to it. Some of these constraints are:
Network speed
Heroku Free Tier load limit
Heroku Postgres Free Tier Addon database size limit
The utilization of Amazon’s Alexa devices also bring some constraints such as:
A new device will have to be purchased for every room the realtor wants the service in if they don’t have any more devices
The devices will have to be connected to wifi at all times
If we make the Alexa app a public app, when you ask a question you have to use a keyword to open the app, such as “Alexa, ask AlexaOpenHouse what is the square footage of the house?” which isn’t as user friendly as saying “Alexa, what is the square footage of the house?”. To solve this problem, we could make the Alexa app a private business app, but then the setup would be much more difficult for realtors to open an account and start using our system

Engineering Standards
ISO/IEC 12207:2017 - The primary standard for developing software systems. It is not really a standard for a product, but rather for the processes necessary to develop software [6]. Since the standard document is so vast and includes so many different processes and it would be unrealistic for us to adhere to them all, we will look into the ones that are more feasible for us to use, such as the technical processes of implementation, integration, verification and validation.
ISO/IEC 29119 - The international standard for software testing [7]. We will mainly adhere to part 4 of the standard, which specifies the different testing techniques and methods such as random testing, to fully test our program.
Code of Ethics & Standards of Practice of the National Association of Realtors [8] - While not an engineering standard, since we will be working with the real estate industry we will also have to abide by the most common code of ethics for realtors. Although we won’t be able to control what a realtor writes in the custom questions, we need to make sure that our basic questions, or how we might answer them don’t break these standards.  Some of the standards in this document that may apply to us are:
The realtor must not deliberately mislead clients as to the market value of a property
The realtor must not release confidential information without consent
The realtor must not exaggerate, conceal or misrepresent facts of the property
Realtors shall not volunteer information regarding the racial, religious or ethnic composition of any neighborhood nor shall they engage in any activity which may result in panic selling, however, they may provide other demographic information. 
6. Project Plan
The project will  be developed through a custom implementation of the SCRUM methodology aided with prototype development along with various simple software engineering practices to measure our work and properly assess the required effort. As we can see below the scrum framework leverages a backlog of activities with hierarchical planning and iterative development. 


Figure 5: SCRUM Framework [1]

We structured our project by developing a set of epics that constitutes the main tasks required within our application. Each epic is broken down into tasks that occupy the backlog and receive a story point value which roughly estimates the hours required on each task. Jira project management software will be used to effectively manage remote team operations in a virtual SCRUM environment. Below we will list our initial epics along with the initial tasks which are still subject to realtor validation.
Epics
Alexa Touring Skill
Implement custom Q&A solution
Explore available data collection capabilities
Alexa devices coordination for room set up
Backend Flask Server
Develop Domain objects that would be used to handle information.
Define business logic and the required routes.
Landing Page
Property Management Page
Room Management Page
Overview Page
Database connection
Realtor Profile
Frontend connection
Frontend Property Management application 
Develop initial UI elements
Landing Page
Property Management Page
Room Management Page
Overview Page
Backend Connection

Each task can be seen explained with greater detail at our Jira page which contains a detailed description of the list above.
Deliverables
The course structure serves as our main guide for the project with each written report signaling the end of a phase from the prototype. We will follow an iterative approach with client discussions to properly polish usability and test the application on each phase. The proposal document presented will be expanded as work goes on  to detail the course of the development effort. The application and the iterative report serve as the main deliverables. 
Prototype
Phase 1 - Domain Engineering and initial design draft. 
Phase 2  - customQ&A Skill connected to our Web Application
Phase 3 - Alexa devices and Room Coordination feature
Phase 4 - Data collection and analysis features
Team Distribution
The development team has opted for leveraging the individual capabilities of each member while balancing the workload in a horizontal manner to avoid bottlenecks in the development process. Below we will outline the core focus of each member along with the roles and responsibilities throughout the project. 
Guillermo Betancourt
Previous work on project management and python frameworks has guided my focus towards backend development and project management. Initial efforts focused on defining the methodology to be used for developing our application in a structured manner. I will also be taking on basic React issues and Alexa Skill development.
Luis Rampolla Martínez
Personal interest in voice assistant technologies and how they can be applied as business tools to optimize workflows positions me to focus on the Alexa app model and how to leverage it to create a better user experience. I also plan on working on the full stack for specific Alexa-related stories.
Luis F. Domenech Ortiz
My previous experience with React front end development leads me to focus on the front end web app with which the realtor will interact with. As I have previous experience with back end development and have a desire to learn Alexa Skill development, I will also be helping with stories related to them.










References

[1] 	E. Gulakov, “Organization of the business process of a real estate agency, using an information system supported by a regression model.” Polytechnic Institute of Bragança, Bragança, 2017. [Online]. Available: https://bibliotecadigital.ipb.pt/bitstream/10198/14660/1/Egor%20Gulakov.pdf. [Accessed: Jan. 28, 2021].

[2] 	Talk To The House, Talk To The House, ver 1.0. [Online]. Available: https://www.amazon.com/Talk-To-The-House/dp/B07518KSZX. [Accessed: Feb. 10, 2021].

[3] 	“How Real Estate Commission Works,” REDFIN, Jan-2020. [Online]. Available: https://www.redfin.com/guides/how-much-is-real-estate-agent-commission-buyer-seller. [Accessed: Feb. 12, 2021]. 

[4] 	M. Holtje, “What Should You Ask During an Open House? 60 Questions for Homebuyers,” HomeLight Blog, 21-Feb-2020. [Online]. Available: https://www.homelight.com/blog/buyer-what-to-ask-during-an-open-house/. [Accessed: Feb. 08, 2021]. 

[5] 	D. Sedlak, “25 Questions To Ask At A Home Showing,” HomesInSanpete, 02-Jul-2015. [Online]. Available: https://homesinsanpete.com/25-questions-to-ask-at-a-home-showing/. [Accessed: Feb. 05, 2021]. 

[6] 	Systems and software engineering – Software life cycle processes. ISO/IEC 12207:2017, 2017. 

[7] 	Software and systems engineering -- Software testing. ISO/IEC 29119, 2013.

[8] 	National Association of Realtors, “2021 Code of Ethics & Standards of Practice”,  National Association of Realtors, 2021. [Online]. Available: https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2021-code-of-ethics-standards-of-practice. [Accessed: Feb. 02, 2021]. 
