let points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: null, y: 4 },
    { x: 3, y: undefined }
  ];
  
  function filterValidPoints(points) {
    return points.filter(point => point.x !== null && point.x !== undefined && point.y !== null && point.y !== undefined);
  }
  
  let validPoints = filterValidPoints(points);
  
  console.log(validPoints); 
  