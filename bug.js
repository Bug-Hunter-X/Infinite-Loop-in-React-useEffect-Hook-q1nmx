```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic, causing an infinite loop
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```