import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomizeService} from '../common/services/customize.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailVerificationService} from '../common/services/email-verification.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit, OnDestroy {
  success = true;
  show = false;
  private unsubscribe$ = new Subject<void>();

  constructor(public customizeService: CustomizeService,
              private emailVerificationService: EmailVerificationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getVerificationToken();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getVerificationToken() {
    this.activatedRoute.queryParams.subscribe(params => {
      const token = params['verificationToken'];
      if (token) {
        this.verifyEmail(token);
      } else {
        this.router.navigateByUrl('login');
      }
    });
  }

  private verifyEmail(verificationToken: string) {
    this.emailVerificationService.verifyEmail(verificationToken)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => {
          this.success = true;
          this.show = true;
        },
        () => {
          this.success = false;
          this.show = true;
        }
      );
  }
}
