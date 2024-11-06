export function maxArea(height: number[]): number {
  const len = height.length
  let maxArea: number = 0

  for (let i1 = 0; i1 < len - 1; i1++) {
    for (let i2 = i1 + 1; i2 < len; i2++) {
      const lessHeight = height[i1] < height[i2] ? height[i1] : height[i2]
      const area = lessHeight * (i2 - i1)
      
      if (area > maxArea) {
        maxArea = area
      }
    }
  }
  
  return maxArea
};

export function maxAreaOptimized(height: number[]): number {
  const len = height.length
  let maxArea: number = 0
  
  for (let i1 = 0; i1 < len - 1; i1++) {
    const potentialArea = height[i1] * (len - 1 - i1)
    
    if (potentialArea <= maxArea) {
      continue
    }
    
    for (let i2 = i1 + 1; i2 < len; i2++) {
      const lessHeight = height[i1] < height[i2] ? height[i1] : height[i2]
      const area = lessHeight * (i2 - i1)

      if (area > maxArea) {
        maxArea = area
      }
    }
  }

  return maxArea
};

// (n - 1) * (n - 1)