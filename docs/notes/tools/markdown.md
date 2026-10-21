# Markdown 语法速查

## 标题与强调

```md
# 一级标题
## 二级标题

**加粗**、*斜体*、`行内代码`、~~删除线~~
```

## 列表

```md
- 无序项
  - 嵌套项

1. 有序项
```

## 链接与图片

```md
[链接文字](https://example.com)
![图片说明](./image.png)
```

## 代码块

````md
```java
public class Demo {
    public static void main(String[] args) {
        System.out.println("hello");
    }
}
```
````

## 表格

```md
| 列 A | 列 B |
| --- | --- |
| 1 | 2 |
```

## 提示容器（VitePress 扩展）

```md
::: tip 提示
这是一条提示
:::
```

::: tip 提示
这是一条提示
:::

::: warning 注意
这是一条警告
:::

::: danger 危险
这是一条危险信息
:::
