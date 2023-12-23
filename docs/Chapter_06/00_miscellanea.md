---
template: main.html
title: Miscellanea
---

TBD

## Example of Flow Chart

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

## Example of State Diagram

``` mermaid
stateDiagram-v2
  state fork_state <<fork>>
    [*] --> fork_state
    fork_state --> State2
    fork_state --> State3

    state join_state <<join>>
    State2 --> join_state
    State3 --> join_state
    join_state --> State4
    State4 --> [*]
```

## Example of State Diagram

See: [mermaid.js.org](https://mermaid.js.org/syntax/mindmap.html)

``` mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```
## Example of LaTeX formulas

Inline math: \( E = mc^2 \), or $L=q_\infty S C_L\,$.

Display, unnumbered:

\[
E = mc^2
\]

Display, numbered:

\begin{equation}
\operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
\end{equation}

The homomorphism $f$ is injective if and only if its kernel is only the singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such that $f(a)=f(b)$.