# postcss-preset-env performance issue

## Steps

1. Clone the repo and run `yarn`
2. Run `yarn start`, you will see node inspect output like this:

```
Debugger listening on ws://127.0.0.1:9229/77d11bef-5731-4136-bf81-181e689ce2c8
For help, see: https://nodejs.org/en/docs/inspector
```

3. Open Chrome and visit `chrome://inspect/#devices`
4. Click `inspect` link

![inspect](https://user-images.githubusercontent.com/1812118/145723221-a9abe3b8-49e6-4e53-b752-f8480b9b5ffe.png)

5. Click `Start` button in the Profiler tab

![profiler](https://user-images.githubusercontent.com/1812118/145723255-2f47cbe1-7508-4cd1-8b76-a0b654069c2d.png)

6. Then, wait about 30 seconds, when the Webpack finished building, click `Stop` button.

7. Change the dropdown to `Heavy (Bottom Up)` if needed, and click the `Total Time` to sort the results.

![result](https://user-images.githubusercontent.com/1812118/145723337-a3675885-1ada-45c6-ae94-493cd4874b08.png)
