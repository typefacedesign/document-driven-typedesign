# Overview

## User Persona

Chris is a Designer who wants to add a new font to the Google Web Fonts directory.

## Acceptance Criteria

For Chris to add the font to the Google Web Fonts directory he must upload it to [NAME] and test it against a set of criteria to ensure it meets the required standard.

## User Journeys & Scenarios

* Font Uploading
	* Uploading a New Font (New Visitor)
	* Uploading a New Font (Previous Visitor)
	* Uploading an Existing Font
	* Removing an Existing Font
* Font Testing
	* New Test
	* Continuing a Test
	* Completing a Test
	* Repeating a Test
	* Skipping a Question
	* Skipping a Section
* Results
	* View
	* Share

## Font Uploading

### Uploading a New Font (New Visitor)

* Chris has not visited before so he is asked to upload a fonts(s)
* Chris drags some fonts from a folder on his computer to the drop area
	* Chris is also able to select fonts using a File Dialog
* Chris is notified of the progress for each font as they are uploaded
* Once all the fonts have been uploaded Chris is shown a list of them

### Uploading a New Font (Previous Visitor)

* Chris is shown a list of fonts he uploaded on a previous visit, each with its own progress indicator outlining if it has been fully tested or not
* Chris decides he wants to upload a new font so he drags a font from a folder on his computer to the drop area
	* Chris is also able to select a font using a File Dialog
* Chris is notified of the progress for the font as it is uploaded
* Once the font has been uploaded it is added to the list of fonts Chris had previously uploaded

### Uploading an Existing Font

* Chris is trying to upload a font he has previously uploaded
* Chris is asked if he wants to replace the existing font which will undo any testing he has already completed for that font
	* If Chris answers Yes, it will replace that font
		* Chris can Undo this
	* If Chris answers No, it will not replace that font

### Removing an Existing Font

* Chris wants to remove a font he has uploaded
* Chris clicks on the Delete button for the font he wants to remove
* Chris is reminded that this will undo any testing he has already completed for that font
	* If Chris answers Yes, it will remove that font
		* Chris can Undo this
	* If Chris answers No, it will not remove that font

## Font Testing

### New Test

* Chris wants to test a font he has just uploaded
* Chris chooses it from his list of uploaded fonts
* Chris is presented with a bar that informs him of his overall progress for the font, as well as a list of sections he will need to complete as part of testing:
	* Kern
	* Hinting
	* Headlines
	* Text
	* adhesion
	* hamburgefonstiv
	* a-z
	* Words
	* Caps
	* Layout
	* Lettering
	* Latin
	* Non Latin
	* …
* Chris clicks on the first section which is Kern
* Chris is presented with a question for each of the 14 segments in the Kern section
* The first segment is already selected and shows Chris a block of numbers, asking if they are evenly coloured
	* Answering Yes, Chris is taken to the next segment
	* Answering No, Chris is asked to highlight which numbers are not correct
* Chris says numbers 1 and 3 are too light and number 8 is too dark
* Once chris has answered questions for all of the segments, the Kern section is marked as complete and Chris is taken to the next section which in this case is Hinting

### Continuing a Test

* Chris wants to take a break from testing his font and return to it at a later date
* Chris closes the browser window whilst on the Hinting section 
* A few hours later Chris wants to continue his test and opens his browser window again
* Chris chooses the font he wants to continue testing from his list of uploaded fonts
* Chris is taken to the Hinting section, which was where he was upon closing the browser window

### Completing a Test

* Chris has answered all of the questions in each section for his font
* Chris is presented with a summary for each section highlighting any issues or comments relating to questions raised during testing
* Chris is presented with a bar that informs him his overall progress for the font is 100% and each section is also marked as complete
* Chris is given the option to Share Results or Repeat Test

### Repeating a Test

* Chris wants to repeat a test on a font he had previously completed 100%
	* Should a user be able to repeat a test?

### Skipping a Question

* Chris wants to skip a Question
	* Should a user be able to skip a question?

### Skipping a Section

* Chris wants to skip a Section
	* Should a user be able to skip a section?


## Results

### View

* Chris wants to View the results of a test for a font
* Chris chooses a font from his list of uploaded fonts that is 100% complete in progress
* Chris is presented with a summary for each section highlighting any issues or comments relating to questions raised during testing

### Share

* Chris wants to Share the results of a test for a font
* Chris chooses a font from his list of uploaded fonts that is 100% test complete
* Chris clicks on the Share Results button and is asked to enter the email address(s) of the recipient(s) as well an optional note
* Chris clicks on the Share button and is shown a confirmation message
	* Chris can Undo this

## Questions

* Can a user group uploaded fonts into sets? i.e. all of the individual Roboto family fonts in a “Roboto” folder.

* Do we need to have User Accounts (Sign Up and Sign In) – just trying to think of how we store the progress of a user as they go through testing as well as previously uploaded fonts, etc or are we happy to store all of this on the client side?

* Should a user be able to repeat a test?

* Should a user be able to skip a question entirely?

* Should a user be able to skip a section entirely? i.e. Hinting or Kern

* Should the test be linear and start at the first section or can a user choose where to start and the order they want to complete the other sections in?

* What are the questions for every section and segment? This will be vital to know to ensure the interface is optimally designed.

* If a user is testing a font and wants to switch to a different font, what happens if they are at different stages of testing for the 2 fonts? i.e. they are testing the Hinting section on Font 1 but are on the Kern section on Font 2. I would recommend that when switching fonts it simply takes them to the next section for that font they haven’t completed testing for, unless they have 100% completed testing in which case take them to the Results page for that font.
