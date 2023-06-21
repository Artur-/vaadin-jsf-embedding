# Vaadin + Jakarta Faces (aka JSF integration) example

This example app shows how to integrate Vaadin UIs into existing JSF application. 

Current versions in the example (but principles are same for older versions as well):

 * Vaadin 24.1
 * Jakarta EE 10

To deploy the example, use for example Payara 6, but any Jakarta EE 10 compatible container should be fine.

Alternatively you can launch from the cli with the pre-configured Widlfly 28

   mvn wildfly:run

The app is then deployed to http://localhost:8080/vaadin-jsf
