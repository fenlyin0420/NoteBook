- 扫描指定主机上的端口：`namp <ip>`

## 端口状态
```
open/closed  <-- filterd/unfilterd
```
nmap向端口发送TCP SYN包，返回：
- ACK+SYN包：open
- ACK+RET包 ：closed
- RET包：unfiltered
- 没有返回或收到ICMP Destination Unreachable: filtered
