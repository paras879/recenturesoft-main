import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image_url: {
        type: String,
    },
    source_id: {
        type: String,
    },
    pubDate: {
        type: Date,
    },
    link: {
        type: String,
        required: true,
        unique: true, // Prevent duplicate news articles
    },
    categories: [{
        type: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true
});

// Create index for search and sorting
NewsSchema.index({ title: 'text', description: 'text' });
NewsSchema.index({ pubDate: -1 });

const News = mongoose.models.News || mongoose.model('News', NewsSchema);

export default News;
