# Few-shot Prompting
`few-shot prompting` 技术不适合需要多步推理的任务😣。

```
 count character 'r' in a word:  
 Q: error  
 A: 3  
 Qt: prompt  
 At: 1  
 Q: gray  
 A: 1  
 ​  
 Q: strawberry  
 A:
```
---


# Chain-of-Thought prompting



# Prompt Elements

A prompt contains any of the following elements:
**Question** - a question askd for AI
or
**Instruction** - a specific task or instruction you want the model to perform

**Context** - external `information` or additional context that can steer the model to better responses

**Input Data** - the input or question that we are interested to find a response for

**Output Indicator** - the type or format of the output.


# prompts examples
- **Code Generation**
```
/* 
Ask the user for their name and say "Hello" 
*/
```

```
'''
Ask the user for their name and say "Hello" 
'''
```

```
/* java
selection sort
*/
```


```
 Classify the text into neutral, negative, or positive  
 Text: I think the food was okay.  
 Sentiment:
```

- **Order Instruction**
```
Order following number in non-decrease order.
Numbers: 3, 2, 1
Ordered numbers: 1, 2, 3
Numbers: 3, 4, 1, 5, 2, 76, 23
Ordered numbers:
```

```
Extract the name of places in the following text. 

Desired format:
Place: <comma_separated_list_of_places>

Input: "Although these developments are encouraging to researchers, much is still a mystery. “We often have a black box between the brain and the effect we see in the periphery,” says Henrique Veiga-Fernandes, a neuroimmunologist at the Champalimaud Centre for the Unknown in London. “If we want to use it in the therapeutic context, we actually need to understand the mechanism.”"
```

```
Traslate the text to Chinese.

Text:
"""
Although these developments are encouraging to researchers, much is still a mystery. “We often have a black box between the brain and the effect we see in the periphery,” says Henrique Veiga-Fernandes, a neuroimmunologist at the Champalimaud Centre for the Unknown in London. “If we want to use it in the therapeutic context, we actually need to understand the mechanism.”
"""
```

```
提取文本中的地名。

文本：
"""
在纽约，尽管这些发展对研究人员来说是令人鼓舞的，但还有很多事情仍然是个谜。“我们经常在大脑和边缘看到的效果之间有一个黑盒子。”伦敦未知中心神经免疫学家亨里克·维加-弗朗西斯（Henrique Veiga-Fernandes）说。“如果我们想在治疗上下功夫，实际上我们需要理解机制。”
"""

地名：【用逗号分隔的地名】
```


# 个人总结
在借助大模型处理任务的过程中🚀，多个不同任务可千万别共享同一个上下文窗口哦🙅‍♀️。一旦共享，就容易使得大模型注意力分散，根本没法出色地完成当下的任务😣。

因此，最佳实践应当是：**一个任务独占一个上下文**✅。 每个任务都拥有专属的 “小天地”，大模型便能心无旁骛，火力全开，高效精准地完成任务啦💪。

