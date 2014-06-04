# Overview

## User Persona

Chris is a Designer who wants to design a high quality Latin + Devanagari typeface families.

## Acceptance Criteria

For Chris to assess the quality of his design, he must load production-ready Font Families into a web page (testmyfont.com) and follow guided tests, then improve the Fonts and load them again until all the tests are passed.

## Scenarios

There are 4 scenarios to consider:

### Managing Font Families

This allows Chris to create Font Families and add/remove Fonts to them

### Previewing Font Families

This allows Chris to Preview a Font Family (similarly to the current Testing page)

### Comparing Font Families
This allows Chris to compare 1 or more Font Families at a time

### Testing Font Families

This allows Chris to follow guided tests for his Font Family

## User Journeys

* Managing Font Families
	* Create a new Font Family (New User)
	* Create a new Font Family (Existing User)
	* Rename an existing Font Family
	* Remove an existing Font Family
	* Add 1 or more Fonts to a Font Family
	* Add 1 or more existing Fonts to a Font Family
	* Remove an existing Font from a Font Family
* Previewing Font Families
	* Choosing a Font Family
* Comparing Font Families
	* Adding a Font Family
	* Removing a Font Family
* Testing Font Families
	* Starting a new Test
	* Answering a Segment's Questions
	* Skipping a Question
	* Skipping a Section
	* Ignore a Question
	* Ignore a Section
	* Continuing a Test
	* Completing a Test
	* Repeating a Test
	* Include an Ignored Question or Section
	* Results
		* View (Directly after testing)
		* View (Any time after testing)
		* Share

------

## Managing Font Families

### Create a new Font Family (New User)

* Chris is new to testmyfont.com and has not added any Font Families previously
* Chris is asked to create a Font Family to get started
* Chris types in a name
* Chris clicks the "Save" button
* Chris is shown a confirmation message and is asked to upload 1 or more Font to the Font Family

### Create a new Font Family (Existing User)

* Chris wants to create a new Font Family
* Chris clicks on the "Manage" button on his dashboard
* Chris is shown a form above his list
* Chris is asked to give his new Font Family a unique name
* Chris types in a new name
	* If the name is already being used, he is told to choose a different name
* Chris clicks the "Save" button
* Chris is shown a confirmation message and is asked to upload 1 or more Font to the Font Family

### Renaming an existing Font Family

* Chris is viewing a Font Family
* Chris clicks on the "Edit" button
* Chris is shown a form with a Text Input and Button
* Chris types in a new name
	* If the name is already being used, he is told to choose a different name
* Chris clicks the "Save" button
* Chris is shown a confirmation message
* Chris can Undo this

### Removing an existing Font Family

* Chris is viewing a Font Family
* Chris clicks on the "Remove" button
* Chris is reminded that this will remove any Fonts he has added to the Font Family, as well as forgetting any testing completed for those Fonts
	* If Chris answers "Yes",
		* It will remove the Font Family and any Fonts that have been added to it
		* Chris is shown a confirmation message
		* Chris can Undo this
	* If Chris answers "No",
		* It will not remove that Font Family or any Fonts that have been added to it

### Add 1 or more Fonts to a Font Family

* Chris is viewing a Font Family
* Chris wants to add Fonts to it
* Chris drags the Fonts from a folder on his computer to the drop area
	* Chris is also able to select Fonts using a File Dialog
* Chris is notified of the progress for each Font as they are loaded
* Once the font has been loaded it is added to the list of Fonts for the Font Family

### Add 1 or more existing Fonts to a Font Family

* Chris is viewing a Font Family
* Chris is trying to add Fonts to it but some of them already exist
* For each Font that already exists, Chris is asked if he wants to replace the existing Font which will forget any testing he has already completed for that Font
	* If Chris answers Yes,
		* It will replace that Font
		* Chris is shown a confirmation message
		* Chris can Undo this
	* If Chris answers No,
		* It will not replace that Font

### Removing an existing Font from a Font Family

* Chris is viewing a Font Family
* Chris wants to remove a Font from it
* Chris clicks on the "Remove" button for the Font he wants to remove
* Chris is reminded that this will forget any testing he has already completed for that Font
	* If Chris answers Yes,
		* It will remove that Font
		* Chris can Undo this
	* If Chris answers No,
		* It will not remove that Font

## Previewing Font Families

### Choosing a Font Family

* Chris wants to preview a Font Family
* Chris clicks on the "Preview" button on his dashboard
* Chris is asked to choose which Font Family he wants to preview
* Chris chooses a Font Family and is shown a list of sections he can preview. Examples:
	* Overview
	* Headings
	* Paragraphs
	* Lists
	* Numbers
	* Caps
	* Lowercase
	* Mixed Content
	* Glyphs
	* World Scripts

------

## Comparing Font Families

### Adding a Font Family

* Chris is previewing a Font Family
* Chris wants to compare it with another Font Family
* Chris clicks on the "Add Font Family" button
* Chris is shown a list of his Font Families
* Chris chooses another Font Family to compare
* The preview window splits into 2 columns, one for each font Family

### Removing a Font Family

* Chris is previewing 2 Font Families
* Chris wants to remove a Font Family
* Chris clicks on the "Remove" button for one of the Font Families
* The preview window reverts to 1 column

------

## Testing Font Families

### Starting a new Test

* Chris wants to test a Font Family he has loaded
* Chris clicks on the "Test" button on his dashboard
* Chris is asked to choose which Font Family he wants to test
	* Each Font Family has its own progress indicator outlining how much it has been Tested already
* Chris chooses a Font Family
* Chris is presented with a bar that informs him of his overall progress for the Font Family, as well as a list of sections he will need to complete as part of testing. Examples:
	* Headlines
	* Text
	* adhesion
	* hamburgefonstiv
	* a-z
	* Words
	* Caps
	* Layout
	* Lettering
	* Kern
	* Hinting
	* Latin
	* World Scripts
	* More?...
* Chris clicks on a section, e.g. Kern
* Chris is presented with the first of 14 segments in the Kern section

### Answering a Segment's Questions

* The first segment shows Chris a block of numbers, and the first of 2 questions: "Are the numbers evenly coloured?"
	* Answering Yes, Chris is taken to the next question
	* Answering No, 
		* Chris is asked to highlight which numbers are not correct
		* Chris says numbers 1 and 3 are too light and number 8 is too dark
		* Chris is taken to the next question.
* Chris is shown question 2 of 2, "Are these numbers suitable as the default set?"
	* Answering Yes,
		* Chris is taken to the next question
	* Answering No,
		* Chris is asked to add a note, and is taken to the next question

### Skipping a Question

* Chris wants to skip a Question
* Chris clicks "Skip Question"
* Chris is taken to the next question

### Skipping a Section

* Chris wants to skip a Section
* Chris clicks "Skip Section"
* Chris is taken to the next unanswered question in the next section
* If the list of sections is visible, Chris clicks another item in the list
* Chris is taken to the next unanswered question in that section

### Ignore a Question
 
* Chris wants to ignore a Question, because it doesn't make sense for the given font
* Chris clicks "Ignore Question"
* Chris is taken to the next question
* This question doesn't effect the completion percentage

### Ignore a Section

* Chris wants to ignore a Section, because it doesn't make sense for the given font
* Chris clicks "Ignore Section"
* Chris is taken to the next unanswered question in the next section
* This section doesn't effect the completion percentage
* This section doesn't effect the completion percentage

### Continuing a Test

* Chris wants to take a break from testing his font and return to it at a later date
* Chris closes the browser window whilst on the Hinting section 
* A few hours later Chris wants to continue his test and opens his browser window again
* Chris chooses the font he wants to continue testing from his list of loaded fonts
* Chris is taken to the question within the section he was answering upon closing the browser window

### Completing a Test

* Once Chris has answered all questions in a section, the section is marked as complete, and Chris is taken to the next section
* Once Chris has answered all questions in all sections
	* Chris can see his overall progress for the font is 100% and each section is complete
	* Chris can see a summary for each section, highlighting any issues or comments relating to questions raised during testing
* Chris is given the option to Share Results or Repeat Test

### Repeating a Test

* Chris wants to repeat a test on a font he had previously completed 100%
* Chris can follow the Starting a new Test process
* Chris finds each test shows his previous answer
* Chris can change his previous answers

### Include an Ignored Question or Section

* Chris wants to include a Question or Section previously ignored
* TODO

------

## Results

### View (Directly after testing)

* Chris has just completed a test for a Font Family
* Chris is presented with a summary for each section highlighting any issues or comments relating to questions raised during testing

### View (Any time after testing)

* Chris wants to View the results of a test for a Font Family he completed a few days ago
* Chris clicks on the "Test" button on his dashboard
* Chris is asked to choose which Font Family he wants to Test
* Chris chooses a Font Family that is 100% test complete
* Chris is presented with a summary for each section highlighting any issues or comments relating to questions raised during testing

### Share

* Chris is viewing the results of a Test he has completed for a Font Family
* Chris wants to Share these results
* Chris clicks on the "Share Results" button and is asked to enter the email address(s) of the recipient(s) as well an optional note
* Chris clicks on the "Share" button
* Chris is shown a confirmation message
* Chris can Undo this

------

## Unanswered Questions

*Q: Are the sections defined in the Test scenario all relevant for the purposes of Testing? Some of them seem like they would be better suited purely in the Preview scenario. Looking through the DDT document I just want to make sure the list of sections we've defined match the list of parameters mentioned as outlined:*

* *fit of typeset text within the brief*
* *key dimensions within the body*
* *stroke thickness range*
* *balance of key strokes and space within and between letters*
* *stroke modulation*
* *in/out stroke recipes*
* *alignments in H and V axis*
* *transitions between letter elements*
* *relating of inner and outer strokes*
* *letter shapes within key patterns*
* *integration of exceptions*

------

## Answered Questions

*Q: Can a user group uploaded fonts into sets? i.e. all of the individual Roboto family fonts in a “Roboto” folder.*

> A: Yes. Within 'Font Family Uploading', add the ability to group fonts, and in other sections, allow testing groups. Essentially font on its own is a font set with 1 member (DC)

*Q: Do we need to have User Accounts (Sign Up and Sign In) – just trying to think of how we store the progress of a user as they go through testing as well as previously uploaded fonts, etc or are we happy to store all of this on the client side?*

> A: We store the progress all client side, such as with [localStorage](http://www.html5rocks.com/en/features/storage) or similar (DC)

*Q: Should a user be able to repeat a test?*

> A: Yes. (DC)

*Q: Should a user be able to skip a question entirely?*

> A: Yes. (DC)

*Q: Should a user be able to skip a section entirely? i.e. Hinting or Kern*

> A: Yes; both skip and exclude. (DC)

*Q: Should the test be linear and start at the first section or can a user choose where to start and the order they want to complete the other sections in?*

> A: There should be a default linear path, so Dave can just go answer, answer, answer and hammer on it until all the tests are done; and Chris should be able to load a font and navigate to specific questions to inform his design process. (DC)

*Q: What are the questions for every section and segment? This will be vital to know to ensure the interface is optimally designed.*

> A: I hope to get this ready for July 1. (DC)

*Q: If a user is testing a font and wants to switch to a different font, what happens if they are at different stages of testing for the 2 fonts? i.e. they are testing the Hinting section on Font 1 but are on the Kern section on Font 2. I would recommend that when switching fonts it simply takes them to the next section for that font they haven’t completed testing for, unless they have 100% completed testing in which case take them to the Results page for that font.*

> A: I think your recommendation is good. (DC)
