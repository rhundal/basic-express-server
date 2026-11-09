### Reflections

1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?

- res.send() - sends a response back to the client
- res.sendFile() - sends a file as a response back to the client

2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?

- my understanding is it helps with path construction for when the files are served on the server after deployment
- if we omit path and only give relative path, it wont be dynamic I assume and we could end up failing to serve or reach the public or desired file

3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?

- I would create menu.html
- create another get endpoint to return the menu.html as response for url path "/menu
- test it (I already implemented it)
