fetch('example.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
  fetch('https://example.com/api/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'My Title',
      content: 'My Content'
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
  
  async function getData() {
    try {
        const response = await fetch('https://example.com/data.json');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
