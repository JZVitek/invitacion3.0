import { useRef, useState } from 'react';
import { Play, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="flex items-center justify-center">
      <audio ref={audioRef} src="/music/song.mp3" onEnded={handleEnded} />
      <Button onClick={handleToggle}>
        {isPlaying ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>
    </div>
  );
}