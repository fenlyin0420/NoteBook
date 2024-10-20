![image](img1.png) 
## 本地提交与修改

- `git status` 查看工作区状态，如果工作区index所指向的文件与仓库中的相比有变化，会给出具体提示。
- `git add <file1 file2> ...` 将指定文件加入index，表明要跟踪他们
- `git commit <file> [-a] [-m "xxx"]` 提交index中指定文件到本地仓库，-a表示提交index中所有文件，-m添加提交注释
- `git reset --<opt> HEAD~1` 撤销最后一次提交，更改是否保留取决于选项
	- `--soft`保留更改
	- `--hard` 撤销更改
- `git commit --amend` 修改最后一次提交的消息
- `git rm <file>` 将文件从工作区和index区删除
- `git reset` `git restore <file>` 回退版本并忽略修改。对某个文件修改后如果想要撤销，则应先reset，然后restore。
- `git mv` 等价于`mv`
- `git checkout --<file>` 将file加入index后，如果想撤销修改，也可以使用此命令
- `git diff` 查看工作区详细的变化

## 日志

`git log` 查看提交日志
`git blam <file>` 按行查看指定文件的修改历史
`git log --graph` 以树型方式显示各分支提交历史
## 暂存区

要解除（应用）一个`stash`，你可以使用`git stash apply`命令。这个命令会将`stash`中的修改应用到当前的工作目录和索引中，但不会从stash列表中移除这个stash。这意味着你可以多次应用同一个stash。

如果你想要应用stash并同时从stash列表中移除它（即“解除”并“丢弃”这个stash），你可以使用`git stash pop`命令。这个命令结合了`apply`和`drop`操作：它先应用stash，然后将其从列表中移除。

### 基本的`git stash pop`命令
```bash
git stash pop
```
这个命令默认应用最近的一个stash。如果你有多个stash，并且想要应用一个特定的stash，你可以使用`stash@{<stash_id>}`来指定它，其中`<stash_id>`是stash的标识符（例如`stash@{1}`表示最近第二个stash）。

### 查看所有stash
在应用或解除stash之前，你可能想要查看所有的stash列表，以确认你要应用哪一个。你可以使用`git stash list`命令来查看所有stash的列表：
```bash
git stash list
```
这将列出所有的stash，以及每个stash的描述（如果有的话）。

### 示例

假设你有两个stash，你想要应用第二个stash（假设它是`stash@{1}`），你可以这样做：
```bash
git stash pop stash@{1}
```
或者，如果你只是想看看这个stash的内容而不立即应用它，你可以使用`git stash show stash@{1}`。

## 分支管理
- `git branch` 列出所有分支
- `git branch <branchname>` 创建分支
- `git branch -d <branchname>` 删除分支
- `git branch -M <new_name>` 重名名当前分支
- `git switch -c <branchname> | git checkout [-b] <branchname>` 切换分支，`-b`, `-c`选项，如果分支不存在，则创建新分支并切换

## 合并操作
- `git merge temp` 将 `temp` 分支合并到当前分支

两个分支，如果对某个文件的 **同一个地方** 都进行了修改，然后各自提交，之后如果要合并两个分支(如temp->mster，temp合并到master分支)， git会不知道选择哪个修改，便会发生合并冲突，此时，需要手动编辑冲突文件，解决冲突。之后 `git add .` 、 `git merge --continue` 继续合并即可。

## 远程管理
- `git push <remote> <local_branch>[:<remote_branch>]` 将当前分支推到远程仓库的指定分支
	- `-f | --force` 当远程与本地历史提交不一致时，此选项强制覆盖远程
- `git pull <remote> <branch>` 将远程仓库的指定分支拉到本地
- `git fetch <remote>` 成功抓取后需要合并，才可以到工作区：`git merge [<remote>/]<branch>` 表示将\[远程仓库\<remote>的]\<branch>分支合并当本地当前分支
	- `--allow-unrelated-histories` 在合并阶段，加入这个选项和将无关历史合并到一起
- `git clone -b <branchname> <git address>` 通过选项-b可以指定远程仓库的指定分支
- `git remote show [origin]` 查看远程仓库列表或某个远程仓库的详细信息


## 仓库配置 
- `git config -e [--global] [--system]` 打开配置文件并编辑，默认是当前仓库的配置文件，即`Dir/.git/config`，只影响当前仓库；`--global` 选项则打开用户级配置文件，即`username/.gitconfg`，影响当前用户的所有仓库；`--system`选项打开系统及配置文件，即`/etc/gitconfg`，影响当前系统上的所有git仓库
- `git config -l | --list` 列出当前仓库配置，从上到下依次列出系统级、用户级、仓库级的配置文件，其中，仓库级配置会覆盖用户级和系统及配置，用户级配置会覆盖系统及配置，总之，影响范围越小的配置优先级越高
- `git config --system core.editor "vim"` 配置默认编辑器

### 添加远程仓库
`git remote add <name> <addr>` \<name> 是你给这个仓库气的名称，取决于你，\<addr>是远程仓库的地址。


## 凭据管理
- 对于 public repo: `push` 操作需要密码
- 对于 private repo: `clone`, `pull`, `push` 操作均需要密码

自动化操作免登录：使用git的 `credential.helper` 配置。
- `store` 将用户名和口令以明文方式储存在 `~/.git-credentials`当中
- `cache` 将用户名和口令暂时存在内存中，15分钟后消失
- 使用凭据管理工具： `windows credential manager`, `git-credential-manager`等等。

>[!note]
在Windows中，身份验证由 `windows credential manager` 管理。
在其他平台，可以下载凭据管理器，比如 `git-credential-manager` 等。

>[!warning]
>github 已移除口令（密码）验证方式，转而使用 token 方式，在使用 `store` 或 `cache` 时，如果给的是用户口令（密码），将失败。

- 对于`store`配置格式： `https://<username>:<tokens>@github.com`

## gitignore不起作用问题修复
- 原因：当文件已被跟踪后，如果想要ignore，git将依然不会忽视，除非清除缓存：
``` shell
git rm [-r] --cached <file>
# -r 用于删除目录
```
## gitignore 配置
- `!file.xxx`  `!` 表示文件被排除在规则之外


# github 多用户协作
假设主用户创建了仓库，他与其他用户协作。
- 主用户创建初始仓库后，其他用户可以推送内容进行初始化。
- 仓库一旦初始化，未经邀请的其他用户将无法再推送。
- 用户往GitHub推送首先需要登录github，登陆后可以根据git配置中的用户账号（邮箱）来决定以谁的身份推送。

## 用户登录Github
```vim
# 这决定远程仓库的登录用户
[credential <url>]
	username = <you name>

# 这个决定你的登录方式
[credential]
	helper = [manager | stoer | cache]
```


>[!warning]
>即使是以我的GitHub账号登录的，但如果我的git配置中，email配置的是另一个人的Github账号，那么将内容推送到Github中后，显示的贡献者也是另一个人。但如果git没有配置email，那么将使用push时github认证的用户身份。


# 理解
- git log 查看的是当前分支的提交历史，新分支可以继承父分支的提交历史
- 当前分支上工作区干不干净，是将工作区与分支上最新提交的历史作比较的
- 暂存区存的是要提交的文件的变化，当一个文件被stage后再发生修改，想要提交就必须再次add，暂存新的修改