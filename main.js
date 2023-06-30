const textElements = document.querySelectorAll('#text-container h2');
const imgElement = document.querySelector('img');
const imageUrls = [
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8flowersfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  
  'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  
  'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  
  'https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFtc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  
  'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
];

textElements.forEach((textElement, index) => {
  textElement.addEventListener('mouseenter', () => {
    imgElement.setAttribute('src', imageUrls[index]);
  });
});