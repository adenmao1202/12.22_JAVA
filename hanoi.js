// Initialize arrays for three poles
const sourcePole = [ 3, 2, 1];
const auxiliaryPole = [];
const targetPole = [];

// Function: Move disks in the Hanoi Tower
function hanoiTower(n, source, auxiliary, target) {
    
     if (n === 0) {
        // No disk to move
        return;
      }

      
      hanoiTower(n - 1, source, target, auxiliary);

      
      target.push(source.pop());
      displayState();

      
      hanoiTower(n - 1, auxiliary, source, target);
    }
  
  
  // Function: Display the current state on the web page
  function displayState() {
    document.getElementById('output').innerHTML += `
      <p>A: ${sourcePole.join(', ')}</p>
      <p>B: ${auxiliaryPole.join(', ')}</p>
      <p>C: ${targetPole.join(', ')}</p>
      <hr>
    `;
  }
  

  
  // Display the initial state
  displayState();
  
  // Solve the Hanoi Tower problem
  hanoiTower(sourcePole.length, sourcePole, auxiliaryPole, targetPole);
  

  