import http from 'k6/http';
import { check, sleep } from 'k6';

// Read from Environment variables if passed, else fallback to a default (helpful for standalone runs)
// When running: k6 run -e WEBSITE_URL=https://recenturesoft-main.vercel.app load-test.js
const BASE_URL = __ENV.WEBSITE_URL || 'https://recenturesoft-main.vercel.app';

export const options = {
  stages: [
    { duration: '60s', target: 500 }, // Ramp-up to 500 virtual users over 60 seconds
    { duration: '5m', target: 500 },  // Sustain 500 VUs for 5 minutes
    { duration: '30s', target: 0 },   // Ramp-down to 0 users over 30 seconds
  ],
  thresholds: {
    // 95% of requests must complete below 2.0s
    http_req_duration: ['p(95)<2000'],
    // Error rate must be strictly less than 1%
    http_req_failed: ['rate<0.01'], 
  },
};

export default function () {
  // 1. Hit the homepage
  const homeRes = http.get(`${BASE_URL}/`);
  
  check(homeRes, {
    'Homepage status is 200': (r) => r.status === 200,
    'Homepage loaded quickly': (r) => r.timings.duration < 2000,
  });

  sleep(1);

  // 2. Hit the global blocks API (simulating frontend fetching block data)
  const apiRes = http.get(`${BASE_URL}/api/admin/global-blocks`);
  
  check(apiRes, {
    'API status is 200': (r) => r.status === 200,
  });

  // Wait randomly between 1 to 3 seconds before the next iteration
  // This simulates realistic user think-time
  sleep(Math.random() * 2 + 1);
}
