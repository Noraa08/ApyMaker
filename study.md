### Check existing, and return a boolean

- [title, content, userId].every(Boolean)
- Boolean(title)

### Object methods

- Object.values()
- Object.keys()

### Router v6

[React Router V6讲解](https://juejin.cn/post/7067436563457638413)

```
// Parent router

<React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* 注意，这里父级后面必须加上 /* 用于匹配后续的任意子路由，否则按照 react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的 */}
          <Route path="/login-example/*" element={<Login />} />
          <Route path="/hooks-use-case/*" element={<HooksUseCase />} />
          <Route path="/redux-use-case/*" element={<ReduxUseCase />} />

          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
```

```
 <Routes>
        {/* 布局路由 Layout - Outlet */}
        <Route element={<Layout />} >

          {/* 这里会在内部处理父路由已经匹配到的路径前缀，所以不要写成 /teams/:teamId，直接写后面的部分 */}
          <Route path="/counter" element={<Counter />} />

          <Route path="/posts" element={<PostsList />}/>
          <Route path="/posts/:postId" element={<SinglePostPage />} />

          <Route path="/select" element={<Select />} />

          <Route path="*" element={<Error />} />

        </Route>
      </Routes>
```

### react-router-dom: Outlet for common layout

```
<Routes>
  <Route path="/" element={<App />} >
      {/* 子路由为父路由 chilren，注意子路由 path 开头要能与父路由匹配 */}
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />} />
  </Route>
</Routes>

```

```
import { Outlet } from 'react-router'
export function App() {
    return (
        <>
          App
          <Outlet/>
        </>
    )
}
```


### TypeScript

* useRef hook

  ```
  import * as React from 'react';

  const App = () => {
    const ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, []);

    return <input ref={ref} />;
  };

  export default App;
  ```
