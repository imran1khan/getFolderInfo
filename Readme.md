# Get a json file and use in chat-gpt

i personally fased a problem, that whenever i wanted to get some information about a project or what this project is all about.
/ or if i wanted to to know how this projet is working
i had to search throught many places to get the info,
i can do this if there is a way to upload the entire folder into the chat-gpt and get all the info that i wanted,

but it's not possible because, right now when i am making this project there is no way to upload an entire_folder in chat-gpt
so i got an idea to turn the entire folder into a json file which is going to conatain the path of all the files and their data respestively
and this json file later i can upload to the chat-gpt to get all the info about the project. 

Whatever info i want, i can just ask chat-gpt.

so if you are fasing the same issue, feel free to use this.

# how to use this in your project

```
npm i getjsonfromfolder
```

```
import {makeJsonFile,seeFiles2} from "getjsonfromfolder";

const folderPath = `D:\\VS_code\\youtubeProject2\\twitterBot\\twitterBot_Backend` //the folder that you want to check

// get all the files using seeFiles2()
// seeFiles2() takes two argument 
//1.  a path of the folder
//2. an array of all the files and folder you want to ignore, you can put here the full path of that files you want to ignore or the name only

const files = seeFiles2(folderPath,[`node_modules`,`.env`,`.env.example`,`.gitignore`,`package-lock.json`,`utils`,`dist`]);
// console.log(files) if you want to see all the files is right or not

// after getting all the files you want then make a folder where you want to store the json file
const outputFolderPath=`D:\\VS_code\\youtubeProject2\\OpenAi\\testingFolder\\outPut`

// run the below function it take all the files as input and the output folder path
makeJsonFile(files,outputFolderPath);
```