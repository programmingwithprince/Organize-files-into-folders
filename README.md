## 📝 Overview

This script scans a given folder, identifies the files, and organizes them into subfolders based on their extensions. If a subfolder corresponding to the file extension doesn't already exist, it creates one and moves the file there. 📁

This is ideal for cleaning up and organizing large directories with various file types. 🔧

## 🔧 How It Works

1. The script reads the contents of the specified directory. 📂
2. It checks if each item is a file. 🧐
3. For each file, it extracts the file extension. 📝
4. It then checks if a subfolder for the extension exists:
   - If it exists, the file is moved into the respective subfolder. ➡️
   - If it doesn't exist, a new folder is created, and the file is moved there. 🆕

This helps in organizing files by type, making your directory structure cleaner and easier to navigate. 🧹

## ⚡ Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/programmingwithprince/Organize-files-into-folders.git
      ```
2.Navigate to the project directory:
  ```bash
  cd Organize-files-into-folders

 ```



   ## 🚀Usage
1. Set the `dir` variable to the directory you want to organize:
2. Update the `dir` variable with the path to the directory you want to organize:
   ```javascript
   dir = "D:\\Your\\Directory\\Path\"
   ```

3. Run the script:
   
    ```bash
   node fileOrganizer.js
     ```
## 🤝Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

## 🛡️License 

This project is licensed under the MIT License.📝
