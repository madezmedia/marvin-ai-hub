'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Day {
  day: number;
  title: string;
  description: string;
  topics: string[];
  completed: boolean;
}

interface Resource {
  category: string;
  title: string;
  url: string;
  description: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'roadmap' | 'resources' | 'tools'>('overview');
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const toggleDay = (day: number) => {
    const newCompleted = new Set(completedDays);
    if (newCompleted.has(day)) {
      newCompleted.delete(day);
    } else {
      newCompleted.add(day);
    }
    setCompletedDays(newCompleted);
  };

  const roadmap: Day[] = [
    {
      day: 1,
      title: 'Prompt Engineering Mastery',
      description: 'Turn "okay" responses into "amazing" ones using the ROLE + CONTEXT + TASK + FORMAT formula',
      topics: ['The Formula', '3 Iteration Rule', 'Practice Prompts'],
      completed: false
    },
    {
      day: 2,
      title: 'Custom Instructions',
      description: 'Make ChatGPT remember YOUR preferences and work style',
      topics: ['Setup Guide', 'Best Practices', 'Pro Templates'],
      completed: false
    },
    {
      day: 3,
      title: 'Content Batching',
      description: 'Create 30 days of social media content in 30 minutes',
      topics: ['Workflow Template', 'Batch Generation', 'Save & Reuse'],
      completed: false
    },
    {
      day: 4,
      title: 'Analysis & Research',
      description: 'Use ChatGPT as your research assistant for long content',
      topics: ['Summarization', 'Competitor Research', 'Data Extraction'],
      completed: false
    },
    {
      day: 5,
      title: 'Iteration & Refinement',
      description: 'Get exactly what you want by iterating through drafts',
      topics: ['3-Iteration Rule', 'Real Examples', 'Save Templates'],
      completed: false
    },
    {
      day: 6,
      title: 'Files & Documents',
      description: 'Upload PDFs, spreadsheets, and images for AI analysis',
      topics: ['PDF Analysis', 'Spreadsheet Insights', 'Image Understanding'],
      completed: false
    },
    {
      day: 7,
      title: 'Build Your Prompt Library',
      description: 'Create reusable templates for repetitive tasks',
      topics: ['Template Creation', 'Categorization', 'Final Challenge'],
      completed: false
    }
  ];

  const resources: Resource[] = [
    {
      category: 'Claude (Anthropic)',
      title: 'Main Documentation',
      url: 'https://docs.claude.com/en/docs/intro',
      description: 'Complete Claude API docs and quickstart guide'
    },
    {
      category: 'Claude (Anthropic)',
      title: 'Anthropic Academy',
      url: 'https://anthropic.skilljar.com/',
      description: 'Free courses on Claude API and MCP'
    },
    {
      category: 'Claude (Anthropic)',
      title: 'Build with Claude',
      url: 'https://www.anthropic.com/learn/build-with-claude',
      description: 'Claude Sonnet 4.5 & Opus 4.5 guides'
    },
    {
      category: 'Gemini (Google AI)',
      title: 'Gemini API Docs',
      url: 'https://ai.google.dev/gemini-api/docs',
      description: 'Official Google AI documentation'
    },
    {
      category: 'Gemini (Google AI)',
      title: 'Gemini Cookbook',
      url: 'https://github.com/google-gemini/cookbook',
      description: 'Structured learning path with examples'
    },
    {
      category: 'Gemini (Google AI)',
      title: 'Gemini 101 (Node.js)',
      url: 'https://developers.google.com/learn/pathways/solution-ai-gemini-101',
      description: 'Google AI Studio prototyping guide'
    },
    {
      category: 'ChatGPT (OpenAI)',
      title: 'Platform Overview',
      url: 'https://platform.openai.com/docs/overview/',
      description: 'Complete OpenAI platform documentation'
    },
    {
      category: 'ChatGPT (OpenAI)',
      title: 'Developer Quickstart',
      url: 'https://platform.openai.com/docs/quickstart',
      description: 'Make your first API request in minutes'
    },
    {
      category: 'ChatGPT (OpenAI)',
      title: 'Tutorial Library',
      url: 'https://platform.openai.com/docs/tutorials',
      description: 'Build real AI apps step-by-step'
    }
  ];

  const aiTools = [
    {
      name: 'ChatGPT',
      url: 'https://chat.openai.com',
      description: 'Versatile AI for daily tasks',
      pricing: 'Free / $20/month Plus',
      bestFor: 'General use, plugins, wide adoption'
    },
    {
      name: 'Claude',
      url: 'https://claude.ai',
      description: 'Great for long-form and analysis',
      pricing: 'Free / $20/month Pro',
      bestFor: 'Writing, coding, research'
    },
    {
      name: 'Gemini',
      url: 'https://ai.google.dev',
      description: 'Multimodal AI with Google integration',
      pricing: 'Free tier available',
      bestFor: 'Research, images, Google ecosystem'
    },
    {
      name: 'Suno AI',
      url: 'https://suno.ai',
      description: 'AI music generation',
      pricing: 'Free tier available',
      bestFor: 'Backing tracks, song creation'
    },
    {
      name: 'ElevenLabs',
      url: 'https://elevenlabs.io',
      description: 'AI voice generation',
      pricing: 'Free tier available',
      bestFor: 'Voiceovers, audio branding'
    }
  ];

  const collaborationIdeas = [
    {
      icon: '🎤',
      title: 'AI-Generated Karaoke Content',
      description: 'Custom tracks, parody lyrics, themed playlists, voiceovers for intros',
      tools: ['ChatGPT', 'Suno AI', 'ElevenLabs']
    },
    {
      icon: '📱',
      title: 'Social Media Content Engine',
      description: 'Auto-generate captions, hashtags, schedules, highlight reels',
      tools: ['ChatGPT', 'Claude', 'Automation tools']
    },
    {
      icon: '🎵',
      title: 'AI Music & Voice Projects',
      description: 'SonicBrand integration, vocals + AI production, podcast editing',
      tools: ['SonicBrand AI', 'Suno', 'ElevenLabs']
    },
    {
      icon: '📧',
      title: 'Event Promotion Automation',
      description: 'Outreach emails, contracts, proposals, marketing materials',
      tools: ['ChatGPT', 'Claude', 'CRM automation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="text-4xl">🎤</span>
                Marvin's AI Learning Hub
              </h1>
              <p className="text-purple-200 mt-1">AI-Powered Entertainment Workflow</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'roadmap'
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                7-Day Roadmap
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'resources'
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'tools'
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                AI Tools
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="text-6xl mb-4">🎤 + 🤖 = 🚀</div>
              <h2 className="text-4xl font-bold text-white mb-4">AI + Entertainment = UNSTOPPABLE</h2>
              <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
                As a karaoke DJ, entertainer, and singer, you have a massive advantage. 
                Combined with AI tools, you can build an AI-Powered Entertainment Brand.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  Start 7-Day Challenge
                </button>
                <button
                  onClick={() => setActiveTab('tools')}
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  Explore Tools
                </button>
              </div>
            </div>

            {/* Your Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-3xl">✅</span> What You Already Have
                </h3>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Stage presence & performance experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Audio/entertainment knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Crowd reading & engagement skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Creative instincts (what works, what doesn't)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-3xl">🤖</span> What AI Adds
                </h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Content creation at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>AI music & voice tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Social media automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Video production workflows</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Collaboration Ideas */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">🤝 Collaboration Ideas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {collaborationIdeas.map((idea, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <div className="text-4xl mb-3">{idea.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{idea.title}</h3>
                    <p className="text-purple-200 mb-4">{idea.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {idea.tools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 1 Action Plan */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">📋 Week 1 Action Plan</h2>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-2">Day 1-2: Inventory & Setup</h4>
                  <ul className="text-purple-200 space-y-1 text-sm">
                    <li>• Share your best performance videos</li>
                    <li>• Create a content repurposing plan</li>
                    <li>• Set up shared folders (Google Drive/Dropbox)</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-2">Day 3-4: AI Tool Training</h4>
                  <ul className="text-purple-200 space-y-1 text-sm">
                    <li>• Learn ChatGPT prompts for entertainment</li>
                    <li>• Focus: lyrics, scripts, marketing, emails</li>
                    <li>• Create 10 prompt templates</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-2">Day 5-7: First Campaign</h4>
                  <ul className="text-purple-200 space-y-1 text-sm">
                    <li>• Promote your next gig (or create demo)</li>
                    <li>• Full content engine (posts, emails, flyers)</li>
                    <li>• Goal: Book 2-3 new gigs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">7-Day ChatGPT Skill Builder</h2>
              <p className="text-xl text-purple-200">Beyond Basic Chatting — Use ChatGPT Like a Pro</p>
              <div className="mt-4 text-purple-300">
                Progress: {completedDays.size} / {roadmap.length} days completed
              </div>
            </div>

            {roadmap.map((day) => (
              <div
                key={day.day}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border transition-all ${
                  completedDays.has(day.day)
                    ? 'border-green-500/50 bg-green-500/10'
                    : 'border-white/20 hover:bg-white/15'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                        completedDays.has(day.day)
                          ? 'bg-green-500 text-white'
                          : 'bg-purple-500 text-white'
                      }`}
                    >
                      {completedDays.has(day.day) ? '✓' : day.day}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{day.title}</h3>
                      <p className="text-purple-200 mt-1">{day.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleDay(day.day)}
                    className={`px-6 py-3 rounded-full font-bold transition-all ${
                      completedDays.has(day.day)
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-purple-500 text-white hover:bg-purple-600'
                    }`}
                  >
                    {completedDays.has(day.day) ? 'Completed!' : 'Mark Complete'}
                  </button>
                </div>

                <div className="ml-20">
                  <h4 className="font-bold text-white mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {day.topics.map((topic) => (
                      <span
                        key={topic}
                        className="bg-purple-500/30 text-purple-200 px-4 py-2 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {completedDays.size === roadmap.length && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold text-white mb-4">Congratulations!</h3>
                <p className="text-xl text-green-200 mb-6">
                  You've completed the 7-day skill builder! Now take on the graduation challenge.
                </p>
                <div className="bg-white/10 rounded-xl p-6 max-w-2xl mx-auto">
                  <h4 className="font-bold text-white mb-3">🎓 Graduation Challenge</h4>
                  <p className="text-green-200 text-sm">
                    Pick ONE real project and complete it using ChatGPT: 30-day social media calendar,
                    10 cold outreach emails, competitor analysis, or a 1,500-word blog post.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Official AI Learning Resources</h2>
              <p className="text-xl text-purple-200">Curated documentation and courses from the top AI platforms</p>
            </div>

            {['Claude (Anthropic)', 'Gemini (Google AI)', 'ChatGPT (OpenAI)'].map((category) => (
              <div key={category} className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  {category === 'Claude (Anthropic)' && '🤖'}
                  {category === 'Gemini (Google AI)' && '🔵'}
                  {category === 'ChatGPT (OpenAI)' && '🟢'}
                  {category}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {resources
                    .filter((r) => r.category === category)
                    .map((resource) => (
                      <a
                        key={resource.url}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-purple-500/50 transition-all"
                      >
                        <h4 className="text-xl font-bold text-white mb-2">{resource.title}</h4>
                        <p className="text-purple-200">{resource.description}</p>
                        <div className="mt-3 text-purple-300 text-sm">→ {resource.url}</div>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tools Tab */}
        {activeTab === 'tools' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">AI Tools Comparison</h2>
              <p className="text-xl text-purple-200">Find the right tool for your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-purple-200 mb-4">{tool.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-300">Pricing:</span>
                      <span className="text-white font-medium">{tool.pricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Best For:</span>
                      <span className="text-white font-medium">{tool.bestFor}</span>
                    </div>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full bg-purple-500 hover:bg-purple-600 text-white text-center py-3 rounded-xl font-bold transition-all"
                  >
                    Visit {tool.name} →
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">💡 Pro Tips</h3>
              <ul className="space-y-3 text-purple-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Start FREE</strong> — All three platforms have free tiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Pick ONE first</strong> — Master Claude OR Gemini OR ChatGPT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Build immediately</strong> — Don't just read docs, create something</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Save your prompts</strong> — Build a personal prompt library</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Join communities</strong> — Reddit, Discord, Stack Overflow</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-purple-200">
            Built for <span className="text-white font-bold">Marvin</span> by <span className="text-white font-bold">Bentley</span> at Mad EZ Media 🎤🚀
          </p>
          <p className="text-purple-300 text-sm mt-2">
            Part of the AI-Powered Entertainment Brand initiative
          </p>
        </div>
      </footer>
    </div>
  );
}
