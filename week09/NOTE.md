# 每周总结可以写在这里

## 重学CSS

### CSS Property
- layout
- interactive
- render/draw
- other
- svg

### Animation
- @keyframes
- animation
    - animation-name
    - animation-duration
    - animation-timing-function
    - animation-delay
    - animation-itreation-count
    - animation-direction
    
### Transition
- transition-property
- transition-duration
- transition-timing-funcion
- transition-delay

### Color
- CMYK
    - Cyan: 青色
    - Mefenta: 品红
    - Yellow: 黄色
    - Black: 黑色
- RGB
    - Red: 红色
    - Green: 绿色
    - Blue: 蓝色
- HSL
    - Hue:颜色(0-360)
    - Saturaion:饱和度(0-100%)
    - Lightness:亮度(0-100%,黑-白)
- HSV
    - Hue:颜色(0-360)
    - Saturaion:饱和度(0-100%)
    - Value:明度(0-100%,黑-白)

### 形状
- data:image/svg+xml,<svg>...</svg>

## 重学CSS

### 合法元素
- DocumentType: <!Document html>
- ElementL: <tag></tag>
- Text: text
- Comment: <!-- xxx -->
- ProcessingInstruction: <?a 1?>
- CDATA: <![CDATA[]]>

### 字符引用
- &#161; => !
- &amp; => &
- &lt; => <
- &gt; => >
- &quot; => "

## DOM

### 导航类操作

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling

### 修改操作
- appendChild
- insertBefore
- removeChild
- replaceChild

### 高级操作
- compareDocumentPosition：比较两个节点的位置关系
- contains：是否包含另一个节点
- isEqualNode：两个节点是否完全相同
- cloneNode(deep)：拷贝一个节点，支持深度拷贝

### 事件
- 冒泡
- 捕获

先捕获、后冒泡