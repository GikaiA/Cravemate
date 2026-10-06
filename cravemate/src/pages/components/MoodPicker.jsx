import React from 'react';

const moods = ['Happy 😀', 'Sad 😢', 'Excited 😃', 'Angry 😡 ', 'Romantic 😍'];

export default function MoodPicker({ onSelect }) {
  return (
    <div className="flex justify-center gap-4 text-align">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onSelect?.(mood)}
          className="bg-blue-500 text-white rounded-md p-2 cursor-pointer"
        >
          {mood}
        </button>
      ))}
    </div>
  );
}
