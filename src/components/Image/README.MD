#Image Component

### The Image component generates an <img />> tag

#### Props
style
classname
src
alt

The remainder of the props are passed to the native element.

```
# Example 

<Image
  style={{ flex: 1 }}
  className={s.myClassname}
  src={require('..../assets/images/myImage.png')}
  alt={'This Image'}
/>
```