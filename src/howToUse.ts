import { makeJsonFile, seeFiles2 } from "./getFiles";
const testFolderPath = `D:\\VS_code\\youtubeProject2\\eraser_clone\\eraser_clone-master`;
const outputFolderPath=`D:\\VS_code\\youtubeProject2\\OpenAi\\mainProject\\output`;
const tstFiles=`D:\\VS_code\\youtubeProject2\\OpenAi\\mainProject\\tsconfig.json`;
const files = seeFiles2(testFolderPath,['README.md','favicon.ico','node_modules','dist','package-lock.json','.gitignore','tsconfig.json','tailwind.config.ts','public'])
makeJsonFile(files,outputFolderPath);
export {makeJsonFile,seeFiles2}