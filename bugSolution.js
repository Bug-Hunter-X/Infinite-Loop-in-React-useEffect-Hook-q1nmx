```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic; it runs only once after mount
    console.log('This will run only once');
  }, []);

  return <div>Count: {count}</div>;
}
```