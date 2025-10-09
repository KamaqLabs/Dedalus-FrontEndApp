import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from '../../services/session-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-presentation-page',
  imports: [],
  standalone: true,
  templateUrl: './presentation-page.html',
  styleUrl: './presentation-page.css'
})
export class PresentationPage implements OnInit {

  private videoSources = [
    'https://cdn.pixabay.com/video/2019/02/01/21120-315137097_large.mp4',
    'https://cdn.pixabay.com/video/2023/02/17/151055-800680791_large.mp4',
    'https://cdn.pixabay.com/video/2024/05/08/211152_large.mp4'
  ];
  private currentVideoIndex = 0;


  private setupVideoRotation() {
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    const source = document.getElementById('video-source') as HTMLSourceElement;

    if (video && source) {
      // Quitar el loop del video para que se dispare 'ended'
      video.loop = false;

      video.addEventListener('ended', () => {
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoSources.length;
        source.src = this.videoSources[this.currentVideoIndex];
        video.load();
        video.play();
      });
    }
  }

  constructor(
    private sessionStorage: SessionStorageService,
    private router: Router,
  ) {
  }
    ngOnInit(): void {
        this.setupVideoRotation();
        this.sessionStorage.setAuthenticated(false);
    }

  onLogin(): void {
    this.router.navigate(['/login']);
  }

  onRegister(): void {
    this.router.navigate(['/create-hotel']);
  }

}
