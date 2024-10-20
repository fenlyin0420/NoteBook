## 链表LinkedList
`java.util.LinkedList` 是 Java 集合框架中的一个重要类，它实现了 `List` 接口和 `Deque`（双端队列）接口。`LinkedList` 的内部实现基于双向链表，因此它提供了在列表的开头和结尾进行快速插入和删除操作的能力。下面是对 `java.util.LinkedList` 的知识总结：

### 1. 主要特性

* **基于双向链表**：允许在列表的开头和结尾进行高效的插入和删除操作。
* **非线程安全**：在多线程环境中使用时需要额外的同步措施。
* **实现了 `List` 接口**：提供了所有通用的列表操作，如 `add()`, `remove()`, `get()`, `set()` 等。
* **实现了 `Deque` 接口**：提供了在列表两端进行插入和删除操作的方法，如 `addFirst()`, `addLast()`, `removeFirst()`, `removeLast()` 等。

### 2. 构造函数

* `LinkedList()`: 创建一个空的 `LinkedList`。
* `LinkedList(Collection<? extends E> c)`: 创建一个包含指定集合元素的 `LinkedList`。

### 3. 主要方法

#### 3.1 列表操作

* `add(E e)`: 在列表的末尾添加元素。
* `add(int index, E element)`: 在指定位置插入元素。
* `remove(int index)`: 移除指定位置的元素。
* `get(int index)`: 返回指定位置的元素。
* `set(int index, E element)`: 用指定元素替换列表中指定位置的元素。

#### 3.2 队列操作（通过 `Deque` 接口）

* `addFirst(E e)`: 在列表的开头添加元素。
* `addLast(E e)`: 在列表的末尾添加元素（等同于 `add(E e)`）。
* `removeFirst()`: 移除并返回列表开头的元素。
* `removeLast()`: 移除并返回列表末尾的元素。
* `getFirst()`: 返回列表开头的元素但不移除。
* `getLast()`: 返回列表末尾的元素但不移除。

#### 3.3 其他常用方法

* `size()`: 返回列表中的元素数量。
* `isEmpty()`: 如果列表不包含元素，则返回 `true`。
* `clear()`: 移除列表中的所有元素。
* `contains(Object o)`: 如果列表包含指定的元素，则返回 `true`。
* `iterator()`: 返回列表的迭代器。
* `listIterator(int index)`: 返回列表中指定位置的列表迭代器。

### 4. 性能特性

* 在列表的开头和结尾插入和删除元素的时间复杂度为 O(1)。
* 在列表的中间插入和删除元素的时间复杂度为 O(n)，因为可能需要移动列表中的其他元素。
* 访问列表中特定位置元素的时间复杂度为 O(n)，因为可能需要遍历链表来找到该元素。

### 5. 注意事项

* 由于 `LinkedList` 是非线程安全的，因此在多线程环境中使用时需要额外的同步措施，例如使用 `Collections.synchronizedList()` 方法。
* 虽然 `LinkedList` 提供了队列操作，但如果你主要使用队列功能，建议考虑使用 `java.util.concurrent` 包中的队列实现，它们提供了更高级别的并发支持和更好的性能。