/**
 * @jest-environment node
 */
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

// Mock mongoose connectDB
jest.mock('@/lib/mongodb', () => ({
    connectDB: jest.fn().mockResolvedValue(true),
}));

// Mock the Contact model
jest.mock('@/models/Contact', () => ({
    create: jest.fn().mockImplementation((data) => Promise.resolve({ ...data, _id: 'mocked_id' })),
}));

describe('Contact API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return 400 if required fields are missing', async () => {
        const req = new NextRequest('http://localhost:3000/api/contact', {
            method: 'POST',
            body: JSON.stringify({ name: 'John Doe' }), // Missing email and message
        });

        const res = await POST(req);
        const json = await res.json();

        expect(res.status).toBe(400);
        expect(json.success).toBe(false);
        expect(json.message).toContain('Please fill in all required fields');
    });

    it('should return 400 for invalid email format', async () => {
        const req = new NextRequest('http://localhost:3000/api/contact', {
            method: 'POST',
            body: JSON.stringify({ name: 'John Doe', email: 'invalid-email', message: 'Hello!' }),
        });

        const res = await POST(req);
        const json = await res.json();

        expect(res.status).toBe(400);
        expect(json.success).toBe(false);
        expect(json.message).toContain('Please enter a valid email address');
    });

    it('should return 201 when valid data is provided', async () => {
        const req = new NextRequest('http://localhost:3000/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: 'John Doe',
                email: 'john@example.com',
                phone: '1234567890',
                message: 'Hello World!',
                subject: 'Test Subject'
            }),
        });

        const res = await POST(req);
        const json = await res.json();

        expect(res.status).toBe(201);
        expect(json.success).toBe(true);
        expect(json.contact.name).toBe('John Doe');
        expect(json.contact.phone).toBe('1234567890');
    });
});
