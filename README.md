Bootstrapped with 'create react-app --typescript'.

## Initial Layout Thoughts

The sidebar in the mockup implies the title, search input, and
breed buttons will scroll out of view, so I want to change
this so these elements have a fixed position.

If there's time, I'll ensure the button layouts look ok on mobile.


## Concerning State

There's a few components that need cross communicating. Even for 
this small SPA, including redux will make everything more 
organized and digestible. 

State will include our list of breed buttons, a search string, 
a list of image results, and bools for loading/error 
states. The buttons and gallery loading and error states should 
be represented independently in UI and reducers. 
