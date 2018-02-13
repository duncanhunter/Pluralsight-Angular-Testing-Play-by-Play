import { async, ComponentFixture, TestBed, fakeAsync, discardPeriodicTasks, tick } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UserService } from '../../services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs/observable/timer';
import { mapTo } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { UserListComponent } from '../../components/user-list/user-list.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;
    let userService: UserService;
    const fakeUser = { id: 1, name: 'fake' };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [UsersComponent, UserListComponent],
            providers: [
                UserService,
                { provide: HttpClient, useValue: {} }
            ],
            // schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        userService = TestBed.get(UserService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have a list of users`, fakeAsync(() => {
        spyOn(userService, 'getUsers').and.returnValue(timer(1000).pipe(mapTo([fakeUser])));
        // spyOn(userService, 'getUsers').and.returnValue(of([fakeUser]));
        component.ngOnInit();
        component.users$.subscribe(users => {
            expect(users).toEqual([fakeUser]);
        });
        tick(1000);
        discardPeriodicTasks();
    }));

    it(`should have a list of users in the DOM`, async(() => {
        spyOn(userService, 'getUsers').and.returnValue(timer(1000).pipe(mapTo([fakeUser])));
        // spyOn(userService, 'getUsers').and.returnValue(of([fakeUser]));
        component.ngOnInit();
        fixture.detectChanges()
        // console.log(document.querySelector('app-user-list').innerHTML);
        // console.log(buttons);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const buttons = fixture.debugElement.queryAll(By.css('button'));
            expect(buttons[1].nativeElement.textContent).toEqual('fake');
        });
    }));
});
