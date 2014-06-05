# Overview

## User Persona

Chris is a Designer who wants to design a high quality Latin + Devanagari typeface families.

## Acceptance Criteria

For Chris to assess the quality of his design, he must load production-ready Font Families into a web page (testmyfont.com) and follow guided tests, then improve the Fonts and load them again until all the tests are passed.

## Scenarios

There are 4 scenarios to consider:

**Managing Font Families**

This allows Chris to create Font Families and add/remove Fonts to them

**Previewing Font Families**

This allows Chris to Preview a Font Family (similarly to the current Testing page)

**Comparing Font Families**

This allows Chris to compare 1 or more Font Families at a time

**Testing Font Families**

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
	* Browsing Font Families
	* Searching Font Families
	* Selecting 1 Font Family
	* Selecting 2 Font Families
	* Deselect a Font Family (1 Font Family Selected)
	* Deselect a Font Family (2 Font Families Selected)
* Comparing Font Families
	* Entering Comparison Mode
	* Leaving Comparison Mode
* Testing Font Families
	* Starting a new Test
	* Answering a Segment's Questions
	* Skipping a Question
	* Skipping a Section
	* Ignoring a Question
	* Ignoring a Section
	* Continuing a Test
	* Completing a Test
	* Repeating a Test
	* Answering an Ignored Question
	* Answering an Ignored Section
	* Results
		* View (Directly after testing)
		* View (Any time after testing)
		* Download

------

## Managing Font Families

### Create a new Font Family (New User)

* Chris is new to testmyfont.com and has not added any Font Families previously
* Chris is asked to create a Font Family to get started
* Chris types in a name
* Chris clicks the "Save" button
<<<<<<< Updated upstream
* Chris is shown a confirmation message
* Chris is asked to upload 1 or more Font to the Font Family
* Chris is shown his dashboard
=======
* Chris is shown his dashboard
* Chris is shown a confirmation message
* Chris is asked to upload 1 or more Font to the Font Family
>>>>>>> Stashed changes

### Create a new Font Family (Existing User)

* Chris wants to create a new Font Family
<<<<<<< Updated upstream
* Chris clicks on the "New Family" button on his dashboard
=======
* Chris clicks on the "Add Font Family" button on his dashboard
* Chris is shown a form
>>>>>>> Stashed changes
* Chris is asked to give his new Font Family a unique name
* Chris types in a new name
	* If the name is already being used, the "Save" button is disabled, with a tooltip that asks Chris to choose another name
* Chris clicks the "Save" button
<<<<<<< Updated upstream
* Chris is shown a confirmation message 
=======
* Chris is shown a confirmation message
>>>>>>> Stashed changes
* Chris is asked to upload 1 or more Font to the Font Family

### Renaming an existing Font Family

* Chris is viewing a Font Family on the dashboard
<<<<<<< Updated upstream
* Chris clicks on the "Rename" button
* Chris is asked for a new name
=======
* Chris clicks on the Font Family title
	* This adds a Text Input on top of the title
>>>>>>> Stashed changes
* Chris types in a new name
	* If the name is already being used, the "Save" button is disabled, with a tooltip that asks Chris to choose another name
* Chris clicks the "Save" button
* Chris is shown a confirmation message
<<<<<<< Updated upstream
=======
* Chris is shown a button to Undo this, for 30 seconds
>>>>>>> Stashed changes

### Removing an existing Font Family

* Chris is viewing a Font Family on the dashboard
* Chris clicks on the "Remove" button
* Chris is reminded that this will remove any Fonts he has added to the Font Family, as well as forgetting any testing completed for those Fonts
	* If Chris answers "Yes",
		* It will remove the Font Family and any Fonts that have been added to it
		* Chris is shown a confirmation message
		* Chris is shown a button to Undo this, for 30 seconds
	* If Chris answers "No",
		* It will not remove that Font Family or any Fonts that have been added to it

### Add 1 or more Fonts to a Font Family

* Chris is viewing a Font Family on the dashboard
* Chris wants to add Fonts to it
* Chris drags the Fonts from a folder on his computer to the drop area
	* Chris is also able to select Fonts using a File Dialog
* Chris is notified of the progress as the Fonts are loaded
* Once all of the Fonts have been loaded they are added to the list of Fonts for the Font Family

### Add 1 or more existing Fonts to a Font Family

* Chris is viewing a Font Family on the dashboard
* Chris is trying to add Fonts to it but some of them already exist in that Family
* For each Font that already exists, Chris is asked if he wants to replace the existing Font which will forget any testing he has already completed for that Font
	* If Chris answers Yes,
		* It will replace that Font
		* Chris is shown a confirmation message
		* Chris is shown a button to Undo this for 30 seconds
	* If Chris answers No,
		* It will not replace that Font

### Removing an existing Font from a Font Family

* Chris is viewing a Font Family on the dashboard
* Chris wants to remove a Font from it
* Chris clicks on the "Remove" button for the Font he wants to remove
* Chris is reminded that this will forget any testing he has already completed for that Font
	* If Chris answers Yes,
		* It will remove that Font
		* Chris is shown a button to Undo this for 30 seconds
	* If Chris answers No,
		* It will not remove that Font

## Previewing Font Families

### Browsing Font Families

<<<<<<< Updated upstream
* Chris wants to browse the fonts in his font families
* Chris sees on his dashboard a preview card of each Font Family
* Chris can change the dimensions of each preview card
* Chris can change the dimentions of every preview card at once
* Chris can reset the dimentions of each or every preview card
* Chris can tell how much each family has alredy been Tested from a progress indicator on each preview
* Chris can change the contents of every preview card to show text at 3 scales:
	* Glyphs
		* 1 glyphs per Font is shown in each preview
		* Each preview is squarish in shape by default
	* Headings
		* 1 line per Font is shown in each preview
		* Each preview is a thin wide rectangle in shape by default
	* Paragraphs
		* 1 small paragraph is shown in each preview, each word in the next Font (looping)
		* Each preview is squarish in shape by default
	* Chris can edit the text
	* Chris can change the px size of the text within a relevant range
		
### Selecting Font Families

* Chris wants to select 1 or more families to Compare or Test
* Chris selects each Font Family
* Chris sees the Font Family is selected
=======
* Chris wants to browse the Fonts in his Font Families
* Chris sees on his dashboard a preview card of each Font Family
* ~~Chris can change the dimensions of each preview card~~
* ~~Chris can change the dimensions of every preview card at once~~
* ~~Chris can reset the dimensions of each or every preview card~~
* Chris can tell how much each Font Family has already been tested from a progress indicator on each preview
* Chris can toggle the contents of every preview card to show text at 3 scales:
	* Glyphs
		* 1 glyph per Font is shown in each preview
		* There is a maximum of 16 glyphs in each preview
		* Each preview is squarish in shape
	* Headings
		* 1 line per Font is shown in each preview
		* There is a maximum of 16 lines in each preview
		* Each preview is a tall thin rectangle in shape
	* Paragraphs
		* 1 small paragraph is shown in each preview
		* Each word in the paragraph is a different Font (looping)
		* Each preview is squarish in shape
	* Chris can edit the text
	* Chris can change the px size of the text within a relevant range
	* Chris can change the Script type
		* Cyrillic
		* Devanagari
		*	Greek
		* Arabic
		* Hebrew
		* Armenian
		* Georgian
		* Thai
		* Bengali
		* Burmese
		* CJK
		* Ethiopic
		* Khmer
		* Lao
		* Tamil
		* Thaana
		* Tibetian

### Searching Font Families (Results)

* Chris wants to search for a specific Font Family
* Chris types in the name of a Font Family into the search Input on his dashboard
* Chris sees a preview card of each Font Family that matches his search term

### Searching Font Families (No Results)

* Chris is trying to Search Font Families (see above)
* His search term doesn't match any Font Families
* Chris is shown a message that no Font Families can be found

### Selecting 1 Font Family

* Chris wants to select 1 Font Family to Test
* Chris clicks on the Font Family
* Chris sees the Font Family is selected
* The "Test" button is now enabled

### Selecting 2 Font Families

* Chris wants to select 2 Font Families to Test
* Chris selects 2 Font Families
* Chris sees each Font Family is selected
* The "Test" button is now disabled
* The "Compare" button is now enabled
* If Chris tries to select another Font Family he is shown a message that a maximum of 2 Font Families can be selected at any one time

### Deselect a Font Family (1 Font Family Selected)

* Chris wants to deselect a Font Family he has selected
* Chris clicks on the Font Family
* Chris sees the Font Family is no longer selected
* The "Test" button is now disabled

### Deselect a Font Family (2 Font Families Selected)

* Chris wants to deselect a Font Family he has selected
* Chris clicks on the Font Family
* Chris sees the Font Family is no longer selected
* The "Compare" button is now disabled
* The "Test" button is now enabled
>>>>>>> Stashed changes

------

## Comparing Font Families

<<<<<<< Updated upstream
* Chris selects 1+ Font Families (see above)
* Chris clicks on the "Compare" button and is taken away from the dashboard
* Chris is taken to the comparison window
* The window splits into 2+ columns, one for each font Family
* TODO: Detail this section

### Leaving the Comparison mode

* Chris wants to return to the dashboard
* Chris clicks on the "Home" button
=======
### Entering Comparison Mode

* Chris selects 2 Font Families (see above)
* Chris clicks on the "Compare" button
	* If only 1 Font Family is selected the "Compare" button is disabled
* The "Compare" button is replaced with a "Stop Comparison" button
* Chris is shown a character map of glyphs
* Each glyph is squarish in shape
* Chris can toggle between 2 Modes for comparison
	* Opacity
	* Mask
* Chris can use a slider to control the selected Mode
	* By default the slider is set to 50% position
* Chris can change the Font Families
* Chris can change the Font style
	* Light (300)
	* Regular (400)
	* Bold (700)
	* Black (900)
* Chris can change the Script type
	* Cyrillic
	* Devanagari
	*	Greek
	* Arabic
	* Hebrew
	* Armenian
	* Georgian
	* Thai
	* Bengali
	* Burmese
	* CJK
	* Ethiopic
	* Khmer
	* Lao
	* Tamil
	* Thaana
	* Tibetian

### Leaving Comparison mode

* Chris wants to stop the comparison
* Chris clicks on the "Stop Comparison" button
>>>>>>> Stashed changes
* Chris is taken to the dashboard

------

## Testing Font Families

### Starting a new Test

* Chris wants to test a Font Family he has loaded
<<<<<<< Updated upstream
* Chris selects 1 Font Families (see above)
	* If more than 1 Family sis selected, the "Test" button is disabled
=======
* Chris selects 1 Font Family (see above)
	* If more than 1 Family is selected, the "Test" button is disabled
>>>>>>> Stashed changes
* Chris clicks on the "Test" button and is taken away from the dashboard
* Chris is presented with a bar that informs him of his overall progress for the Font Family, as well as a list of sections he will need to complete as part of testing.
* Examples from PI:
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
* Examples from GL:
	* fit of typeset text within the brief
	* key dimensions within the body
	* stroke thickness range
	* balance of key strokes and space within and between letters
	* stroke modulation
	* in/out stroke recipes
	* alignments in H and V axis
	* transitions between letter elements
	* relating of inner and outer strokes
	* letter shapes within key patterns
	* integration of exceptions
	* TODO: Add more
<<<<<<< Updated upstream
* Chris clicks on a section, e.g. Kern
* Chris is presented with the first of a set of test document segments, e.g. 14 in in the Kern section
=======
* Chris clicks on the "Begin Test" button
* Chris is presented with a set of test document segments, e.g. 14 in the Kern section
>>>>>>> Stashed changes

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

### Ignoring a Question
 
* Chris wants to ignore a Question, because it doesn't make sense for the given font
* Chris clicks "Ignore Question"
* Chris is taken to the next question
* This question doesn't effect the completion percentage

### Ignoring a Section
  
* Chris wants to ignore a Section, because it doesn't make sense for the given font
* Chris clicks "Ignore Section"
* Chris is taken to the next unanswered question in the next section
* This section doesn't effect the completion percentage

### Continuing a Test

* Chris wants to take a break from testing his font and return to it at a later date
* Chris closes the browser window
* A few hours later Chris wants to continue his test and opens his browser window again
* Chris chooses the Font Family he wants to continue testing from his list of loaded Font Families
* Chris is taken to the section and question he was answering upon closing the browser window
	* The answers Chris gives are automatically saved as he progresses through the test for each Font Family

### Completing a Test

* Once Chris has answered all questions in a section, the section is marked as complete, and Chris is taken to the next section
* Once Chris has answered all questions in all sections
	* Chris can see his overall progress for the font is 100% and each section is complete
	* Chris can see a summary for each section, highlighting any issues or comments relating to questions raised during testing
* Chris is given the option to Download Results or Repeat Test

### Repeating a Test

* Chris wants to repeat a test on a Font he had previously completed 100%
* Chris can follow the Starting a new Test process
* Chris finds each test shows his previous answer
* Chris can change his previous answers

### Answering an Ignored Question

* Chris is viewing the results of a Font Family he has tested
* Chris wants to answer a question previously ignored
* Chris clicks on the question he wants to answer
* Chris is shown the question
* Once Chris has answered the question, he is taken back to the results for the Font Family
* The question he answered is now marked as complete

<<<<<<< Updated upstream
* Chris wants to include a Question or Section previously ignored
* TODO: Figure this out
=======
### Answering an Ignored Section

* Chris is viewing the results of a Font Family he has tested
* Chris wants to answer a section previously ignored
* Chris clicks on the section he wants to answer
* Chris is shown the first question in that section
* Once Chris has answered all of the questions in that section, he is taken back to the results for the Font Family
* The section he answered is now marked as complete
>>>>>>> Stashed changes

------

## Results

### View (Directly after testing)

* Chris has just completed a test for a Font Family
* Chris is presented with a summary for each section highlighting any issues or comments relating to questions raised during testing
* Chris is also shown a list of any Questions or Sections he ignored

### View (Any time after testing)

* Chris wants to View the results of a test for a Font Family he completed a few days ago
* Chris selects 1 Font Families (see above) that is 100% test complete
* Chris clicks on the "Test" button and is taken away from the dashboard
* Chris is presented with a summary for each section highlighting any issues or comments relating to questions raised during testing
* Chris is also shown a list of any Questions or Sections he ignored

### Download

* Chris is viewing the results of a Test he has completed for a Font Family
* Chris wants to Download these results, to save them for later or to share with a colleague
* Chris clicks on the "Download Results" button
* Chris is told he will be given a download HTML file, which he can share like any other file (such as attaching to an email address)
* Chris's browser is sent a downloaded HTML file object, which he is asked to Save or Ignore in the normal way

------

## Unanswered Questions

<<<<<<< Updated upstream
**Q: Are the sections defined in the Test scenario all relevant for the purposes of Testing? Some of them seem like they would be better suited purely in the Preview scenario. Looking through the DDT document I just want to make sure the list of sections we've defined match the list of parameters mentioned as outlined:**

A: DC reworked the preview scenario to be core to the dashboard. The sections are fine, they will be defined by the power users of the application (who will edit its source code.) I guess we should have a small number of user stories for such a persona, Pablo, who has his own HTML+CSS test document segments he has organized into series with Q&As, reads the developer documentation, and adds them.

**Q: Other things to go into a question's interface: Tips? Examples? Highlighting of what to look at?**

A: 

**Q: Its very common to print test documents on high end laser printers. How can Chris print his tests and bulk-enter answers?**

A: 
=======
**Q: Are the sections defined in the Test scenario all relevant for the purposes of Testing? Some of them seem like they would be better suited purely in the Preview scenario. Looking through the DDT document I just want to make sure the list of sections we've defined match the list of parameters mentioned as outlined?**

A: DC reworked the preview scenario to be core to the dashboard. The sections are fine, they will be defined by the power users of the application (who will edit its source code.) I guess we should have a small number of user stories for such a persona, Pablo, who has his own HTML+CSS test document segments he has organised into series with Q&As, reads the developer documentation, and adds them. (DC)

**Q: Other things to go into a question's interface: Tips? Examples? Highlighting of what to look at?**

A:
>>>>>>> Stashed changes

------

## Answered Questions

**Q: Can a user group uploaded fonts into sets? i.e. all of the individual Roboto family fonts in a “Roboto” folder.**

A: Yes. Within 'Font Family Uploading', add the ability to group fonts, and in other sections, allow testing groups. Essentially font on its own is a font set with 1 member (DC)

**Q: Do we need to have User Accounts (Sign Up and Sign In) – just trying to think of how we store the progress of a user as they go through testing as well as previously uploaded fonts, etc or are we happy to store all of this on the client side?**

<<<<<<< Updated upstream
A: We store the progress all client side, such as with [hood.ie](https://www.google.co.uk/search?q=hood.ie+angular) or [PouchDB]() which provide nice wrappers around [localStorage](http://www.html5rocks.com/en/features/storage) etc (DC)
=======
A: We store the progress all client side, such as with [localStorage](http://www.html5rocks.com/en/features/storage) or similar (DC)
>>>>>>> Stashed changes

**Q: Should a user be able to repeat a test?**

A: Yes. (DC)

**Q: Should a user be able to skip a question entirely?**

A: Yes. (DC)

**Q: Should a user be able to skip a section entirely? i.e. Hinting or Kern**

A: Yes; both skip and exclude. (DC)

**Q: Should the test be linear and start at the first section or can a user choose where to start and the order they want to complete the other sections in?**

A: There should be a default linear path, so Dave can just go answer, answer, answer and hammer on it until all the tests are done; and Chris should be able to load a font and navigate to specific questions to inform his design process. (DC)

**Q: What are the questions for every section and segment? This will be vital to know to ensure the interface is optimally designed.**

A: I hope to get this ready for July 1. (DC)

**Q: If a user is testing a font and wants to switch to a different font, what happens if they are at different stages of testing for the 2 fonts? i.e. they are testing the Hinting section on Font 1 but are on the Kern section on Font 2. I would recommend that when switching fonts it simply takes them to the next section for that font they haven’t completed testing for, unless they have 100% completed testing in which case take them to the Results page for that font.**

A: I think your recommendation is good. (DC)
