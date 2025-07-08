import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

interface SkeletonCardProps {
  className?: string;
  variant?: 'default' | 'ai' | 'metric';
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ 
  className = '', 
  variant = 'default' 
}) => {
  if (variant === 'ai') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-2xl flex items-center justify-center animate-pulse">
              <Brain className="h-8 w-8 text-indigo-400" />
            </div>
          </div>
          <div className="text-center mb-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded w-4/6"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="h-6 bg-green-200 rounded w-12 mx-auto mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-8 mx-auto"></div>
            </div>
            <div className="text-center">
              <div className="h-6 bg-blue-200 rounded w-12 mx-auto mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-8 mx-auto"></div>
            </div>
          </div>
          <div className="h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-indigo-300 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'metric') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-300 rounded animate-pulse"></div>
            </div>
            <div className="h-8 bg-gray-200 rounded w-20 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-4"></div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-purple-300 to-pink-300 h-3 rounded-full w-3/4 animate-pulse"></div>
            </div>
            <div className="flex justify-between text-xs">
              <div className="h-3 bg-gray-200 rounded w-6"></div>
              <div className="h-3 bg-gray-200 rounded w-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`animate-pulse group ${className}`}>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 group-hover:shadow-xl transition-shadow">
        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
          <div className="flex-1">
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6"></div>
          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-4/6"></div>
        </div>
        <div className="mt-4">
          <div className="h-10 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg w-full flex items-center justify-center">
            <div className="w-4 h-4 bg-indigo-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;