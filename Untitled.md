## 仓库克隆与配置
``` shell
git https://github.com/fenlyin0420/blockchain_hospital.git
cd blockchain_hospital
git config -e
```
添加email和name配置
![](Pasted%20image%2020241006202559.png)

## 提交
``` shell
git add .
git commit -m "<提交信息>"
```

## 推送
```shell
git push origin master
```

 >[!warning]
 >推送时可能会要求登录，github已经弃用了密码登录方式，因此需要在github生成token。一种方法是使用凭据管理器，进入windows凭据管理器, 添加一个通用凭据(Add a generic credential)：
 > ``` shell
 >address: git:https://github.com
 >user name: <github_username>
 >password: <github_token>
 > ```
 > 然后执行 `git config credential.helper = manager`
>  ---
 > 除了凭据管理，还可以执行：
 > `echo https://<github_username>:<github_token>@github.com | ~/.git-credentials` 
 > `git config credential.helper = store`
 >两行命令即可

>[!note]
>生成github token：
>github主页右上角头像>settings>Developer settings>Personal access tokens > Tokens(classic)

## 拉取
```shell
git pull origin master
```


>[!summary]
>每次开始写代码前最好先**拉取**，每写完一个功能执行一次**本次提交**，结束后**推送**到远程仓库。


# 分文件建立提交
在Git工作区中，如果你对多个文件进行了修改并希望为每个文件的修改分别建立一个提交，可以按照以下步骤操作：

### 使用 `git add --patch` 命令

这个命令允许你交互式地选择文件的部分修改或整个文件的修改来进行暂存。

1. **查看修改**：
   使用 `git status` 查看当前工作区的修改状态，确认哪些文件被修改了。

2. **进入交互式暂存**：
   对你想单独提交的第一个文件使用 `git add --patch <filename>` 命令。例如：
   ```bash
   git add --patch file1.txt
   ```
   此时Git会打开一个交互式的界面，列出`file1.txt`中的所有修改区块。

3. **选择暂存区块**：
   对于每个修改区块，Git会询问你是否要暂存这个区块。你可以通过输入 `y`（yes）或 `n`（no）来选择是否暂存该区块。如果你想暂存该文件的所有修改，可以直接输入 `a`（all）；如果你想跳过该文件的所有修改，可以输入 `d`（done）或 `q`（quit）。

4. **重复步骤2和3**：
   对其他需要单独提交的文件重复上述步骤。

5. **提交暂存的文件**：
   每暂存完一个文件的修改后，你可以使用 `git commit -m "提交信息"` 来提交这些暂存的修改。例如：
   ```bash
   git commit -m "提交了file1.txt的修改"
   ```

6. **继续暂存和提交**：
   重复上述步骤，直到所有文件的修改都被分别提交。

### 使用临时分支或储藏（stash）

如果你不想在每次提交时都处理交互式的选择，可以考虑使用临时分支或储藏功能来保存部分工作，然后分别进行提交。

1. **使用临时分支**：
   - 为每个文件的修改创建一个新的临时分支。
   - 在每个临时分支上只添加并提交相应文件的修改。
   - 切换回主分支，合并或cherry-pick这些提交。

2. **使用储藏功能**：
   - 使用 `git stash` 保存当前工作区的所有修改。
   - 恢复并部分应用储藏，每次只恢复一个文件的修改，然后进行提交。
   - 重复上述步骤，直到所有文件的修改都被分别提交。

### 注意事项

- 在进行任何提交操作之前，建议使用 `git status` 查看当前工作区的状态，确保你了解哪些文件被修改了。
- 提交时，为每个提交添加有意义的提交信息，以便将来能够轻松地追踪和理解代码的历史记录。
- 如果你在提交过程中遇到冲突或错误，请仔细阅读Git的错误信息，并根据需要进行解决。

通过以上步骤，你可以实现对不同文件的修改分别进行提交的目标。
# 丢弃工作区的修改
在Git中，如果你想要丢弃工作区中所有已跟踪文件的本次修改（即撤销自上次提交以来对这些文件所做的更改），你可以使用`git checkout`命令（在Git 2.23及更早版本中）或`git restore`命令（在Git 2.23及更新版本中引入）来实现这一点。不过，请注意，这些操作会永久丢失你的更改，因此在执行之前务必确认你真的不再需要这些更改。

### 使用 `git checkout`（Git 2.23及更早版本）

```bash
git checkout -- .
```

这里的`.`代表当前目录及其所有子目录中的文件。这条命令会将工作区中的所有已跟踪文件回滚到上一次提交时的状态。

### 使用 `git restore`（Git 2.23及更新版本）

`git restore`是Git 2.23版本引入的一个新命令，专门用于恢复工作区的文件。它提供了更清晰的语义，避免了`git checkout`命令的某些混淆。

```bash
git restore --source=HEAD --staged --worktree .
```

但是，对于大多数用途来说，你可以简化这个命令为：

```bash
git restore --worktree .
```

这个命令会将工作区中的所有已跟踪文件恢复到HEAD（即上一次提交）的状态。如果你还希望同时清除暂存区（即撤销`git add`操作），可以添加`--staged`选项：

```bash
git restore --staged --worktree .
```

但是，如果你只是想要丢弃工作区的修改而不影响暂存区，那么只需要使用`--worktree`选项即可。

### 警告

执行这些命令会永久丢弃你的更改，并且Git不会提供恢复这些更改的简单方法（除非你有其他备份或之前已经提交了这些更改）。因此，在执行这些操作之前，请确保你真的不再需要这些更改，或者已经通过其他方式（如`git stash`）保存了它们。

### 额外提示

- 如果你只想丢弃特定文件的修改，可以将`.`替换为那个文件的路径。
- 如果你在使用这些命令时遇到了权限问题，可能需要添加`sudo`（在Linux或macOS上）或以管理员身份运行命令提示符（在Windows上）。但是，通常不建议对Git仓库使用`sudo`，因为这可能会导致权限问题。更好的做法是确保你的Git仓库位于你的用户目录下，或者调整仓库的权限设置。

# git 撤销 add
在 Git 中，如果你在执行 `git add` 命令后想要取消操作，可以使用以下方法：

**一、取消单个文件的添加**

如果你只想取消某个特定文件的添加，可以使用以下命令：

```
git reset HEAD <文件名>
```

例如，如果你添加了一个名为 `example.txt` 的文件，但现在想要取消添加它，可以执行：

```
git reset HEAD example.txt
```

**二、取消所有文件的添加**

如果你想取消所有文件的添加，可以使用以下命令：

```
git reset HEAD
```

这个命令会将暂存区恢复到上一次提交的状态，取消所有在本次 `git add` 操作中添加的文件。

执行这些命令后，被取消添加的文件将回到未被跟踪或已修改但未添加到暂存区的状态。需要注意的是，这些操作不会影响你的工作目录中的文件内容，只是改变了暂存区的状态。