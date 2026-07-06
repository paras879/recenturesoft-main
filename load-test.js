const autocannon = require('autocannon');
const fs = require('fs');
const path = require('path');

async function runTests() {
  console.log('Starting Load Test (100 concurrent users for 30s)...');
  
  const loadResult = await autocannon({
    url: 'http://localhost:3000',
    connections: 100,
    duration: 30,
    title: 'Homepage Load Test'
  });
  
  console.log('Load test completed.');
  
  console.log('Starting Burst Test (500 concurrent users for 5s)...');
  const burstResult = await autocannon({
    url: 'http://localhost:3000',
    connections: 500,
    duration: 5,
    title: 'Homepage Burst Test'
  });
  
  console.log('Burst test completed.');
  
  const report = `
# Performance Testing Report

## 1. Load Test Results
- **Target**: http://localhost:3000 (Homepage)
- **Connections**: 100
- **Duration**: 30 seconds
- **Total Requests**: ${loadResult.requests.total}
- **Average Latency**: ${loadResult.latency.average} ms
- **99th Percentile Latency**: ${loadResult.latency.p99} ms
- **Throughput**: ${(loadResult.throughput.average / 1024 / 1024).toFixed(2)} MB/sec
- **Errors**: ${loadResult.errors}
- **Timeouts**: ${loadResult.timeouts}

## 2. Burst Test Results
- **Target**: http://localhost:3000 (Homepage)
- **Connections**: 500
- **Duration**: 5 seconds
- **Total Requests**: ${burstResult.requests.total}
- **Average Latency**: ${burstResult.latency.average} ms
- **99th Percentile Latency**: ${burstResult.latency.p99} ms
- **Throughput**: ${(burstResult.throughput.average / 1024 / 1024).toFixed(2)} MB/sec
- **Errors**: ${burstResult.errors}
- **Timeouts**: ${burstResult.timeouts}
`;

  fs.writeFileSync(path.join(__dirname, 'performance-report.md'), report);
  console.log('Performance report saved to performance-report.md');
}

runTests().catch(console.error);
