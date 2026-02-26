'use client';

import { Button } from '@micro-frontend-demo/shared';

import { REMOTE1_TEXT } from './constants';

export function Remote1Content() {
  return (
    <div className="space-y-4">
      <p className="text-lg">{REMOTE1_TEXT}</p>
      <Button onClick={() => console.log('Remote 1 clicked')}>
        Remote 1 Buttons are working!
      </Button>
    </div>
  );
} 