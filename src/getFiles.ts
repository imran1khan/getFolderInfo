import fs from 'fs';
import path from 'path';


export function seeFiles(folderPath: string, ignoreFolderOrFile?: string[]) {
    const files = fs.readdirSync(folderPath, { recursive: true });
    const newFiles: string[] = [];
    const ignoredFilesAndFolder: string[] = [];
    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(folderPath, files[i].toString());
        if (ignoreFolderOrFile && ignoreFolderOrFile.some(igore => filePath.includes(igore))) {
            ignoredFilesAndFolder.push(filePath);
        }
        else {
            newFiles.push(filePath);
        }
    }
    console.log(newFiles);
}
export function makeJsonFile(filesList: string[], outputFolderPath: string) {
    const newOutPutfilePath=fs.statSync(outputFolderPath).isDirectory()?path.join(outputFolderPath, 'jsonFile.json'):outputFolderPath;
    const jsonData: { filePath: string, fileData: string }[] = []
    for (let i = 0; i < filesList.length; i++) {
        const fileData = fs.readFileSync(filesList[i]);
        const data = {
            filePath: filesList[i],
            fileData: fileData.toString(),
        }
        jsonData.push(data);
    }
    fs.writeFileSync(newOutPutfilePath, JSON.stringify(jsonData, null, 2), 'utf-8');
}
export function seeFiles2(folderPath: string, ignoreFolderOrFile?: string[]) {
    const newFiles: string[] = [];
    const ignoredFilesAndFolder: string[] = [];
    function getFiles(folderPath: string, ignoreFolderOrFile?: string[]) {
        const files = fs.readdirSync(folderPath);
        for (let i = 0; i < files.length; i++) {
            const filePath = path.join(folderPath, files[i].toString());
            if (ignoreFolderOrFile && ignoreFolderOrFile.some(igore => filePath.includes(igore))) {
                ignoredFilesAndFolder.push(filePath);
                continue;
            }
            else {
                if (fs.statSync(filePath).isDirectory()) {
                    getFiles(filePath, ignoreFolderOrFile);
                }
                else {
                    newFiles.push(filePath);
                }
            }
        }
    }
    getFiles(folderPath, ignoreFolderOrFile)
    return newFiles;
}
// const files = seeFiles2(testFolderPath,['node_modules','dist','package.json','package-lock.json','gitignore','tsconfig.json']);