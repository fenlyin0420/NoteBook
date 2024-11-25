## hash-object
`git hash-object -w text.txt`
`echo "Hello World" | git hash-object -w --stdin`
- `-w` 返回键，并存入数据库
- `--stdin` 输入源
## cat-file
`git cat-file -p d670460b4b4aece5915caf5c68d12f560a9fe3e4`


- `blob-object` 文件内容的SHA-1值，通过`cat-file`可以获取到对应文件的内容。
- `tree-object` 目录的SHA-1值，通过`cat-file`可以获取到其子项目的SHA-1值
- `commit-object` 
- `tag-object`

## Git 引用
### HEAD（分支引用）
相当于分支，HEAD指针指向哪个引用，哪个引用就处于当前工作区，并且提交时，

head文件内容：
```
ref: refs/heads/dev
```
表明当前HEAD指向 dev 分支

### tag（标签引用）

### remote（远程引用）