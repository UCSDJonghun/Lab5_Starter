# Lab 5 - Starter

-Jonghun Lee

#1. Testing the “message” feature of a messaging application

Answer: No, I would not use a unit test to test the “message” feature of a messaging application.
###Reason: The "message" feature involves multiple components working together, including user interactions with the interface, network communications for sending the message, and possibly interactions with backend servers. These are complex interactions that involve more than just a single function or method, which is the primary focus of unit tests. Instead, integration testing or end-to-end testing would be more suitable for evaluating the entire process of writing and sending a message to another user.

#2. Testing the “max message length” feature of a messaging application

Answer: Yes, I would use a unit test to test the “max message length” feature of a messaging application.
###Reason: The "max message length" feature is a specific constraint applied to a function or method within the messaging application. A unit test can verify that the function correctly enforces the maximum length constraint by providing inputs of varying lengths (e.g., less than, equal to, and greater than 80 characters). This ensures that the function behaves as expected and restricts the length of the message appropriately, making unit testing an effective way to confirm the correct behavior of this feature.