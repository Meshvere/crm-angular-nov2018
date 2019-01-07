import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from './prestations.service';

@Injectable({
  providedIn: 'root'
})
export class DetailPrestationResolverService implements Resolve<Prestation> {

  constructor(private ps: PrestationsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.ps.getPrestation(id).pipe(
      take(1),
      mergeMap(item => {
        if (item) {
          return of(item);
        } else { // id not found
          this.router.navigate(['/prestations']);
          return EMPTY;
        }
      })
    );
  }
}
